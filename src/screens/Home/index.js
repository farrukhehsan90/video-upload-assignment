import React, { Fragment, useState } from 'react';
import { View, Alert, ActivityIndicator, Text } from "react-native";
import { Button } from "../../components";
import styles from "./styles";
import { launchImageLibrary } from 'react-native-image-picker';
import { RNFFmpeg } from 'react-native-ffmpeg';
import Video from 'react-native-video';
import RNFS from "react-native-fs";
import AsyncStorage from '@react-native-community/async-storage';
import { staticText } from "../../constants/text";

const Home = () => {
  const [videoPath, setVideoPath] = useState('');
  const [loader, setLoader] = useState(false);

  const openImagePicker = () => {
    const options = {
      title: staticText.videoPicker,
      mediaType: staticText.mediaType,
      storageOptions: {
        skipBackup: true,
        path: staticText.mediaPath
      }
    };

    launchImageLibrary(options, async ({ didCancel, errorMessage, customButton, uri }) => {
      if (didCancel) {
        console.log(staticText.userCancelled);
      } else if (errorMessage) {
        console.log(staticText.error, errorMessage);
      } else if (customButton) {
        console.log(staticText.userTapped, customButton);
      } else {
        setLoader(true);
        setVideoPath(uri);
        const uriComponents = uri.split('/')
        const fileNameAndExtension = uriComponents[uriComponents.length - 1]
        const destPath = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`
        const dateNow = Date.now();
        try {
          await RNFS.copyFile(uri, destPath);
          await RNFFmpeg.execute(`${staticText.mpegFlag1} ${staticText.fileFormat}${destPath} ${staticText.mpegFlag2} ${RNFS.TemporaryDirectoryPath}/${staticText.fileNameStatic}${dateNow}${staticText.fileExtension}`);
          await AsyncStorage.setItem(staticText.videoPath, `${RNFS.TemporaryDirectoryPath}/${staticText.fileNameStatic}${dateNow}${staticText.fileExtension}`);
          console.log(staticText.videoPath, AsyncStorage.getItem(staticText.videoPath));
          setLoader(false);
          Alert.alert(staticText.success, staticText.successText);
        } catch ({ message }) {
          console.log(staticText.error, message);
        }
      }
    });

  }

  return (
    <View style={styles.container}>
      {!!videoPath && <Video source={{ uri: videoPath }}
        style={styles.backgroundVideo}
        resizeMode={staticText.resizeMode}
      />}
      {loader && <Fragment>
        <Text style={styles.loaderText}>{staticText.loaderText}</Text>
        <ActivityIndicator size={staticText.loaderSize} color={styles.loaderText.color} />
      </Fragment>}
      <Button onPress={openImagePicker} title={staticText.uploadVideo} color={staticText.videoBtnColor} textColor={styles.loaderText.color} />
    </View>
  );
};

export default Home;