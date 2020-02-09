import React, {useState} from 'react';
import {ActivityIndicator, View, Text, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import PlayerWrapper from '../components/PlayerWrapper';
import ControlLayout from '../components/ControlLayout';
const Player = () => {
  const [loading, setLoading] = useState(true);
  const [pause, setPause] = useState(false);

  // Loading state
  const onLoad = ({data}) => {
    setLoading(false);
  };

  const pressHandler = () => setPause(!pause);

  return (
    <PlayerWrapper
      loading={loading}
      video={
        <Video
          style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
          source={{
            uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          }}
          resizeMode="contain"
          onLoad={onLoad}
          paused={pause}
        />
      }
      loader={<ActivityIndicator color="#70b124" />}
      controls={
        <ControlLayout>
          <TouchableOpacity
            onPress={pressHandler}
            paused={pause}
            style={{flex: 1}}>
            <View
              style={{
                backgroundColor: '#70b124',
                paddingHorizontal: 7,
                paddingVertical: 3,
                borderRadius: 10,
                outline: 'none',
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>{pause ? 'Play' : 'Pause'}</Text>
            </View>
          </TouchableOpacity>
          <Text>duration</Text>
          <Text>Time left |</Text>
          <Text>Full screen </Text>
        </ControlLayout>
      }></PlayerWrapper>
  );
};

export default Player;
