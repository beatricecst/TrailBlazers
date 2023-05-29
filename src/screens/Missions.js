import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const missions = [
  {
    title: 'Mission 1',
    description: 'Complete task 1',
    progress: 0.6,
  },
  {
    title: 'Mission 2',
    description: 'Complete task 2',
    progress: 0.3,
  },
  {
    title: 'Mission 3',
    description: 'Complete task 3',
    progress: 0.8,
  },
];

const MissionComponent = () => {
  return (
    <View style={styles.container}>
      {missions.map((mission, index) => (
        <View key={index} style={styles.missionContainer}>
          <Text style={styles.title}>{mission.title}</Text>
          <Text style={styles.description}>{mission.description}</Text>
          <ProgressBar
            styleAttr="Horizontal"
            indeterminate={false}
            progress={mission.progress}
            color="#7b3911"
          />
          <Text style={styles.progressCount}>
            Progress: {mission.progress * 100}%
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  missionContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  progressCount: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default MissionComponent;
