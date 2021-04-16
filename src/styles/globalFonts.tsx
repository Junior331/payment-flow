import { createGlobalStyle } from "styled-components";

import DMSansBold from "./DMSans-Bold.ttf";
import DMSansBoldItalic from "./DMSans-BoldItalic.ttf";
import DMSansItalic from "./DMSans-Italic.ttf";
import DMSansMedium from "./DMSans-Medium.ttf";
import DMSansMediumItalic from "./DMSans-MediumItalic.ttf";
import DMSansRegular from "./DMSans-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'DMSansBold';
        src: url(${DMSansBold}) format('ttf');
    }
    @font-face {
        font-family: 'DMSansBoldItalic';
        src: url(${DMSansBoldItalic}) format('ttf');
    }
    @font-face {
        font-family: 'DMSansItalic';
        src: url(${DMSansItalic}) format('ttf');
    }
    @font-face {
        font-family: 'DMSansMedium';
        src: url(${DMSansMedium}) format('ttf');
    }
    @font-face {
        font-family: 'DMSansMediumItalic';
        src: url(${DMSansMediumItalic}) format('ttf');
    }
    @font-face {
        font-family: 'DMSansRegular';
        src: url(${DMSansRegular}) format('ttf');
    }
`;
