// PdfReader.js
import React from "react";
import { View } from "react-native";
import Pdf from "react-native-pdf";

const PdfReader = ({ uri }) => {
  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={{ uri }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default PdfReader;
