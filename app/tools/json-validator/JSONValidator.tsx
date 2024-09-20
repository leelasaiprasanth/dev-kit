"use client";

import { useEffect, useState } from "react";
import TextArea from "@/app/_components/TextArea";

import React from "react";

const JSONValidator = () => {
  const [output, setOutput] = useState("");
  return (
    <div className="w-full h-full flex gap-4">
      <TextArea
        initialInput={initialInput}
        onInputChange={(input) => setOutput(input)}
      />
    </div>
  );
};

export default JSONValidator;

const initialInput =
  "[\n" +
  "  {\n" +
  '    "_id": "66ed6430264ca2d61794ad8e",\n' +
  '    "index": 0,\n' +
  '    "guid": "f695779b-8bbc-422a-934f-2d56aa9ab05e",\n' +
  '    "isActive": false,\n' +
  '    "balance": "$1,737.68",\n' +
  '    "picture": "http://placehold.it/32x32",\n' +
  '    "age": 31,\n' +
  '    "eyeColor": "green",\n' +
  '    "name": "Madeline West",\n' +
  '    "gender": "female",\n' +
  '    "company": "ISBOL",\n' +
  '    "email": "madelinewest@isbol.com",\n' +
  '    "phone": "+1 (800) 589-3489",\n' +
  '    "address": "556 Will Place, Guthrie, California, 196",\n' +
  '    "about": "Ad tempor magna sit commodo magna aute excepteur consectetur dolor eiusmod mollit ex fugiat. Cillum deserunt culpa proident pariatur Lorem commodo commodo mollit incididunt sit culpa laborum. Do do mollit magna ut consectetur labore tempor. Sit Lorem eu aute aliqua deserunt qui ut amet in laborum laboris veniam consectetur.\\r\\n",\n' +
  '    "registered": "2021-10-04T12:23:28 -06:-30",\n' +
  '    "latitude": 82.087192,\n' +
  '    "longitude": -20.345769,\n' +
  '    "tags": [\n' +
  '      "voluptate",\n' +
  '      "ex",\n' +
  '      "voluptate",\n' +
  '      "mollit",\n' +
  '      "qui",\n' +
  '      "ullamco",\n' +
  '      "eu"\n' +
  "    ],\n" +
  '    "friends": [\n' +
  "      {\n" +
  '        "id": 0,\n' +
  '        "name": "Sue Myers"\n' +
  "      },\n" +
  "      {\n" +
  '        "id": 1,\n' +
  '        "name": "Nash Burton"\n' +
  "      },\n" +
  "      {\n" +
  '        "id": 2,\n' +
  '        "name": "Mcgowan Fuller"\n' +
  "      }\n" +
  "    ],\n" +
  '    "greeting": "Hello, Madeline West! You have 6 unread messages.",\n' +
  '    "favoriteFruit": "apple"\n' +
  "  }\n" +
  "]";
