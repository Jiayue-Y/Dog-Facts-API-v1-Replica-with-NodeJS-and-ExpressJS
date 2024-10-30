export default {
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputName: "output.xml"
        }
      ]
    ]
  };
  