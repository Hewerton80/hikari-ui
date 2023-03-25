type MenuOrientationType = "left" | "right" | "top-start" | "top-center" | "top-right" | "bottom-start" | "bottom-center" | "bottom-right";
type AvaliableOrientationsMenu = {
    [Property in MenuOrientationType]: {
        align: "start" | "center" | "end";
        side: "top" | "right" | "bottom" | "left";
    };
};
export declare const menuOrientation: AvaliableOrientationsMenu;
export interface MenuProps {
    orientation?: MenuOrientationType;
}
export declare const Menu: import("@stitches/core/types/styled-component").CssComponent<"div", {}, {
    bpBase: `(min-width: ${number}px)`;
    bpSm: `(min-width: ${number}px)`;
    bpMd: `(min-width: ${number}px)`;
    bpLg: `(min-width: ${number}px)`;
    bpXl: `(min-width: ${number}px)`;
    bp2xl: `(min-width: ${number}px)`;
}, import("@stitches/core/types/css-util").CSS<{
    bpBase: `(min-width: ${number}px)`;
    bpSm: `(min-width: ${number}px)`;
    bpMd: `(min-width: ${number}px)`;
    bpLg: `(min-width: ${number}px)`;
    bpXl: `(min-width: ${number}px)`;
    bp2xl: `(min-width: ${number}px)`;
}, {
    colors: {
        body: string;
        "dark-body": string;
        "dark-card": string;
        "dark-screen": string;
        input: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        dark: string;
        light: string;
        muted: string;
        white: string;
        black: string;
        gray: string;
        "dark-hover": string;
        "gray-light": string;
        "gray-lighter": string;
        "gray-lightest": string;
        "gray-border": string;
        transparent: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
    };
    lineHeights: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": number;
        "6xl": number;
        "7xl": number;
    };
    space: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    borderStyles: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    borderWidths: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    radii: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
}, import("@stitches/core/types/config").DefaultThemeMap, {
    text: (value: "2xl" | "xs" | "sm" | "base" | "lg" | "xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl") => {
        fontSize: string;
        lineHeight: string | number;
    };
    mx: (value: string) => {
        marginLeft: string;
        marginRight: string;
    };
    my: (value: string) => {
        marginTop: string;
        marginBottom: string;
    };
    px: (value: string) => {
        paddingLeft: string;
        paddingRight: string;
    };
    py: (value: string) => {
        paddingTop: string;
        paddingBottom: string;
    };
    size: (value: string | number) => {
        width: string | number;
        height: string | number;
    };
    ring: (color: string) => {
        boxShadow: string;
    };
    shadow: (shadow: "xs" | "sm" | "lg" | "md") => {
        boxShadow: string;
    };
    positionCenter: (position: "fixed" | "absolute") => {
        position: "fixed" | "absolute";
        top: string;
        left: string;
        transform: string;
    };
    spaceY: (value: string | number) => {
        "& > * + *": {
            marginTop: string | number;
        };
    };
    spaceX: (value: string | number) => {
        "& > * + *": {
            marginLeft: string | number;
        };
    };
}>>;
export declare const Item: import("@stitches/core/types/styled-component").CssComponent<"div", {}, {
    bpBase: `(min-width: ${number}px)`;
    bpSm: `(min-width: ${number}px)`;
    bpMd: `(min-width: ${number}px)`;
    bpLg: `(min-width: ${number}px)`;
    bpXl: `(min-width: ${number}px)`;
    bp2xl: `(min-width: ${number}px)`;
}, import("@stitches/core/types/css-util").CSS<{
    bpBase: `(min-width: ${number}px)`;
    bpSm: `(min-width: ${number}px)`;
    bpMd: `(min-width: ${number}px)`;
    bpLg: `(min-width: ${number}px)`;
    bpXl: `(min-width: ${number}px)`;
    bp2xl: `(min-width: ${number}px)`;
}, {
    colors: {
        body: string;
        "dark-body": string;
        "dark-card": string;
        "dark-screen": string;
        input: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        dark: string;
        light: string;
        muted: string;
        white: string;
        black: string;
        gray: string;
        "dark-hover": string;
        "gray-light": string;
        "gray-lighter": string;
        "gray-lightest": string;
        "gray-border": string;
        transparent: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
    };
    lineHeights: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": number;
        "6xl": number;
        "7xl": number;
    };
    space: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    borderStyles: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    borderWidths: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    radii: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        0: number;
        0.25: string;
        0.5: string;
        1: string;
        1.5: string;
        1.75: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        5.5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        11.5: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        46: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
}, import("@stitches/core/types/config").DefaultThemeMap, {
    text: (value: "2xl" | "xs" | "sm" | "base" | "lg" | "xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl") => {
        fontSize: string;
        lineHeight: string | number;
    };
    mx: (value: string) => {
        marginLeft: string;
        marginRight: string;
    };
    my: (value: string) => {
        marginTop: string;
        marginBottom: string;
    };
    px: (value: string) => {
        paddingLeft: string;
        paddingRight: string;
    };
    py: (value: string) => {
        paddingTop: string;
        paddingBottom: string;
    };
    size: (value: string | number) => {
        width: string | number;
        height: string | number;
    };
    ring: (color: string) => {
        boxShadow: string;
    };
    shadow: (shadow: "xs" | "sm" | "lg" | "md") => {
        boxShadow: string;
    };
    positionCenter: (position: "fixed" | "absolute") => {
        position: "fixed" | "absolute";
        top: string;
        left: string;
        transform: string;
    };
    spaceY: (value: string | number) => {
        "& > * + *": {
            marginTop: string | number;
        };
    };
    spaceX: (value: string | number) => {
        "& > * + *": {
            marginLeft: string | number;
        };
    };
}>>;
export {};
