// tools.js
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
// import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import uploader  from '@ajite/editorjs-image-base64';
export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: Embed,
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
    }
  },
  image: {
    class: Image,
    config: {
        uploader
    }
    // config: {
    //   endpoints: {
    //     byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
    //     byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
    //   }
    // }
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}

// Image expected response backend
// {
//     "success" : 1,
//     "file": {
//         "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
//         // ... and any additional fields you want to store, such as width, height, color, extension, etc
//     }
// }