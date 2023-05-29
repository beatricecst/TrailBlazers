import React from 'react';
import { View, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View
      style={{
        boxSizing: 'border-box',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 17.4704,
        margin: 26,
        width: 402,
        height: 372,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1.0919,
        borderTopColor: '#F7F7F7',
        borderRadius: 34.9408,
        shadowColor: '#18274B',
        shadowOffset: {
          width: 0,
          height: 4.3676,
        },
        shadowOpacity: 0.12,
        shadowRadius: -4.3676,
        elevation: 8.73519,
      }}
    >
      {/* Frame 3292 */}
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          width: 272.84,
          height: 211.84,
          borderRadius: 21.8,
        }}
      >
        {/* Frame 2811 */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
            gap: 18.56,
            width: 267.31,
            height: 137,
          }}
        >
          {/* People */}
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
              gap: 8.74,
              width: 94,
              height: 137,
              borderRadius: 21.8,
            }}
          >
            {/* Render your People content here */}
          </View>

          {/* Places */}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 4.3676,
              gap: 2.18,
              width: 96.09,
              height: 148.5,
              backgroundColor: '#FFFFFF',
              shadowColor: '#18274B',
              shadowOffset: {
                width: 0,
                height: 4.3676,
              },
              shadowOpacity: 0.12,
              shadowRadius: -4.3676,
              borderRadius: 96.0871,
            }}
          >
            {/* 2023-05-29 11.48 1 */}
            <Image
              style={{
                width: 92,
                height: 210,
              }}
              source={require('../assets/beatrice.jpeg')}
            />

            {/* Place name */}
            <Text
              style={{
                display: 'none',
                width: 96.09,
                height: 22,
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: 13.1028,
                lineHeight: 22,
                textAlign: 'center',
                color: '#000000',
              }}
            >
              Place Name
            </Text>
          </View>
        </View>

        {/* Frame 2810 */}
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: 8.74,
            width: 154.75,
            height: 108.76,
          }}
        >
          {/* Frame 2806 */}
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              width: 73,
              height: 27,
            }}
          >
            {/* Name */}
            <Text
              style={{
                width: 73,
                height: 27,
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: 17.4704,
                lineHeight: 26,
                color: '#000000',
              }}
            >
              Your name
            </Text>
          </View>

          {/* Frame 2809 */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 0,
              gap: 13.1,
              width: 154.75,
              height: 73.02,
            }}
          >
            {/* Frame 2809 */}
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                padding: 13.1028,
                width: 62.21,
                height: 73.02,
                backgroundColor: '#FFF9E8',
                borderRadius: 21.838,
              }}
            >
              {/* 7 */}
              <Text
                style={{
                  width: 10,
                  height: 27,
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 17.4704,
                  lineHeight: 26,
                  color: '#000000',
                  marginVertical: -2.1838,
                }}
              >
                7
              </Text>

              {/* Posts */}
              <Text
                style={{
                  width: 36,
                  height: 22,
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 13.1028,
                  lineHeight: 22,
                  color: '#000000',
                }}
              >
                Posts
              </Text>
            </View>

            {/* Frame 2808 */}
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                padding: 13.1028,
                paddingHorizontal: 10.919,
                width: 104.84,
                height: 73.02,
                backgroundColor: '#FFF9E8',
                borderRadius: 21.838,
              }}
            >
              {/* 7 */}
              <Text
                style={{
                  width: 10,
                  height: 27,
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 17.4704,
                  lineHeight: 26,
                  color: '#000000',
                  marginVertical: -2.1838,
                }}
              >
                7
              </Text>

              {/* Destinations */}
              <Text
                style={{
                  width: 83,
                  height: 22,
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: 13.1028,
                  lineHeight: 22,
                  color: '#000000',
                }}
              >
                Destinations
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Frame 3291 */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: 10.919,
          gap: 10.92,
          width: 272.84,
          height: 74.84,
        }}
      >
        {/* bio here, I love traveling and I love Phoebe */}
        <Text
          style={{
            width: 251,
            height: 53,
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: 15.2866,
            lineHeight: 26,
            color: '#000000',
          }}
        >
          bio here, I love traveling and I love Phoebe
        </Text>

        {/* edit */}
        <View
          style={{
            position: 'absolute',
            left: '88.72%',
            right: '6.28%',
            top: '11.84%',
            bottom: '80.71%',
            backgroundColor: '#545454',
            zIndex: 1,
          }}
        >
          {/* Render your edit content here */}
        </View>
      </View>
    </View>
  );
};

export default Profile;
