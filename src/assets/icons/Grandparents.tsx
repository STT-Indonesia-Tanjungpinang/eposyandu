import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Grandparents = (props : SvgProps) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <Path
      d="M3.48738 28.2395C3.4453 27.3171 3.42725 26.4654 3.42725 25.6829C3.42725 24.3983 3.47587 23.2995 3.54725 22.376C4.29796 22.584 5.23834 22.7726 6.36341 22.8644C6.30824 23.6566 6.27113 24.5936 6.27099 25.6828C6.27127 26.419 6.28791 27.2242 6.32786 28.1002C6.36483 28.914 5.75914 29.6048 4.97473 29.6431C4.95156 29.6442 4.92881 29.6448 4.9062 29.6448C4.15193 29.6448 3.52321 29.0294 3.48738 28.2395Z"
      fill="#018CB5"
    />
    <Path
      d="M9.32971 28.1013C9.36895 27.224 9.38587 26.4187 9.38587 25.6828C9.38587 24.5924 9.34848 23.6574 9.29331 22.8645C10.4184 22.7728 11.3589 22.5843 12.1098 22.3761C12.181 23.2997 12.2295 24.3984 12.2295 25.6829C12.2295 26.4657 12.2114 27.3168 12.1702 28.2386C12.1344 29.0289 11.5059 29.6452 10.7509 29.6451C10.7286 29.6451 10.7062 29.6446 10.6837 29.6434C9.899 29.6051 9.29288 28.9151 9.32971 28.1013Z"
      fill="#018CB5"
    />
    <Path
      d="M21.0665 22.6224C21.3433 24.3701 21.583 26.3966 21.6916 28.5858C21.7289 29.3344 22.3256 29.9155 23.0401 29.9155C23.0634 29.9155 23.0867 29.9149 23.1102 29.9136C23.8548 29.8736 24.4282 29.2147 24.3898 28.442C24.2745 26.1283 24.0221 23.9985 23.7311 22.1631C23.1774 22.4944 22.3185 22.6709 21.6331 22.6709C21.4221 22.6708 21.2328 22.6543 21.0665 22.6224ZM17.5869 22.6708C17.3886 22.6708 17.1756 22.6553 16.9599 22.6264V29.4611C16.9599 29.5328 16.9528 29.603 16.9397 29.6708C17.2762 29.4325 17.5059 29.0405 17.5286 28.5859C17.6371 26.3966 17.8764 24.3699 18.1538 22.6224C17.9871 22.6543 17.7979 22.6708 17.5869 22.6708Z"
      fill="#018CB5"
    />
    <Path
      d="M23.1366 14.2094C22.5539 14.4871 21.236 15.0148 19.6101 15.0162C17.9842 15.0148 16.6659 14.4873 16.083 14.2095C16.0864 14.4621 16.0991 14.9161 16.1312 15.4256C16.6372 15.8812 16.9593 16.5512 16.9597 17.2986V22.329C17.7953 22.4479 18.6286 22.3477 18.702 21.9235C18.9805 20.3074 19.2811 18.9775 19.5157 18.0411H19.7042C19.9388 18.9777 20.2396 20.3074 20.5182 21.9235C20.672 22.816 24.1898 22.2762 24.0171 21.2739C23.6554 19.1784 23.259 17.5284 22.9898 16.513C23.0989 15.6396 23.1307 14.6361 23.1366 14.2094ZM19.6098 6.49351C21.0922 6.49351 22.2937 4.58701 22.2937 3.04926C22.2937 1.51137 21.0922 0.264648 19.6098 0.264648C18.1277 0.264648 16.9259 1.51137 16.9259 3.04926C16.9259 4.58701 18.1278 6.49351 19.6098 6.49351Z"
      fill="#018CB5"
    />
    <Path
      d="M27.0178 15.4348C26.4564 11.5227 25.7927 9.10624 25.0716 7.57366C24.6981 6.78612 24.3057 6.22354 23.858 5.82925C23.6211 5.61803 23.3595 5.46314 23.0929 5.36387C22.8618 5.27773 22.6271 5.23274 22.4015 5.23495C22.2126 5.23658 22.0399 5.26475 21.8798 5.30782C21.3361 6.15819 20.5227 6.78863 19.6103 6.78863C18.6975 6.78863 17.884 6.15819 17.3404 5.30767C17.1803 5.2646 17.0076 5.23658 16.8189 5.23495C16.3332 5.22994 15.8047 5.43468 15.3621 5.82925C14.9145 6.22354 14.5221 6.78627 14.1483 7.57395C14.0272 7.83135 13.9078 8.11426 13.79 8.42461C14.1694 9.15005 14.5082 9.97844 14.8073 10.903C14.942 10.3861 15.0779 9.92873 15.2134 9.52943C15.6344 8.2746 16.0631 7.58855 16.3622 7.27761C16.1633 9.37308 16.1017 12.652 16.0864 13.7209C16.1269 13.7419 16.1775 13.7674 16.2391 13.7972C16.4174 13.8828 16.6784 13.9981 17.0052 14.1132C17.6585 14.3437 18.5727 14.5743 19.61 14.5738C21.1656 14.5746 22.4454 14.0549 22.9806 13.7972C23.0423 13.7677 23.0926 13.7422 23.1331 13.7211C23.1179 12.6523 23.0563 9.37322 22.8576 7.27746C23.0374 7.46435 23.2638 7.78769 23.5076 8.28847C23.6694 8.6205 23.8385 9.02909 24.0064 9.52943C24.4564 10.8549 24.9104 12.8005 25.3102 15.5592C24.7951 15.8939 24.4513 16.4859 24.4511 17.1634C24.4511 17.4313 24.6606 17.6486 24.9188 17.6486C25.1772 17.6486 25.3867 17.4313 25.3867 17.1634C25.3871 16.9196 25.4789 16.6986 25.628 16.5337C25.7836 16.6908 25.9931 16.7874 26.2204 16.7876C26.2607 16.7876 26.3013 16.7846 26.3423 16.7786C26.5554 16.7469 26.7381 16.6354 26.868 16.4781C27.049 16.647 27.1639 16.8908 27.1643 17.1634V29.3254C27.1643 29.5933 27.3738 29.8109 27.6323 29.8109C27.8905 29.8109 28.1002 29.5933 28.1002 29.3254L28.0999 17.1634C28.0999 16.392 27.6553 15.73 27.0178 15.4348Z"
      fill="#018CB5"
    />
    <Path
      d="M9.33217 1.78054C9.08521 1.64557 8.81791 1.54055 8.53355 1.47181C8.28359 1.41133 8.02781 1.3805 7.77388 1.38065C7.21511 1.38065 6.6862 1.52403 6.21957 1.77803C6.21502 1.72685 6.21203 1.67493 6.21203 1.62256C6.21203 0.726318 6.91212 0 7.77601 0C8.63961 0 9.33999 0.726318 9.33999 1.62256C9.33999 1.67581 9.33715 1.72847 9.33217 1.78054Z"
      fill="#018CB5"
    />
    <Path
      d="M3.4344 28.5625C3.39231 27.6402 3.37426 26.7885 3.37426 26.006C3.37426 24.7213 3.42288 23.6226 3.49426 22.699C4.24497 22.907 5.18535 23.0957 6.31042 23.1874C6.25525 23.9797 6.21814 24.9166 6.218 26.0058C6.21828 26.742 6.23492 27.5473 6.27488 28.4233C6.31184 29.2371 5.70615 29.9279 4.92174 29.9662C4.89857 29.9672 4.87582 29.9678 4.85321 29.9678C4.09895 29.9678 3.47023 29.3524 3.4344 28.5625Z"
      fill="#018CB5"
    />
    <Path
      d="M9.27672 28.4243C9.31596 27.5471 9.33288 26.7417 9.33288 26.0058C9.33288 24.9155 9.29549 23.9804 9.24032 23.1876C10.3654 23.0958 11.3059 22.9073 12.0568 22.6992C12.128 23.6227 12.1765 24.7215 12.1765 26.006C12.1765 26.7888 12.1584 27.6399 12.1172 28.5617C12.0814 29.352 11.4529 29.9683 10.698 29.9681C10.6756 29.9681 10.6532 29.9677 10.6307 29.9665C9.84601 29.9281 9.2399 29.2381 9.27672 28.4243Z"
      fill="#018CB5"
    />
    <Path
      d="M0.907431 17.6406C1.2926 17.6406 1.64449 17.4878 1.91023 17.2372C1.83829 17.751 1.38402 18.114 0.884541 18.0507C0.520844 18.0048 0.233215 17.7452 0.122314 17.4082C0.328902 17.5411 0.56947 17.6238 0.829375 17.6386C0.855536 17.64 0.88127 17.6406 0.907431 17.6406Z"
      fill="#018CB5"
    />
    <Path
      d="M15.4554 17.3129V29.4611C15.4554 29.729 15.6648 29.9466 15.9233 29.9466C16.1815 29.9466 16.3912 29.729 16.3912 29.4611L16.391 17.2992C16.3907 16.5166 15.9337 15.8458 15.2815 15.5573C14.6382 11.3126 13.5657 8.88545 12.5254 7.46349C11.9574 6.68215 11.3926 6.22194 10.9412 5.95215C10.4885 7.35743 9.23077 8.31342 7.7784 8.31342C7.52404 8.31342 7.26826 8.28288 7.01859 8.22241C6.14944 8.01265 5.41124 7.46408 4.93949 6.67817C4.801 6.44733 4.69138 6.20379 4.60935 5.95244C4.15792 6.22238 3.59347 6.68245 3.02589 7.46349C2.75077 7.83934 2.47352 8.28642 2.20266 8.81789C2.38366 10.094 2.47536 11.5689 2.47778 13.2594C2.47778 13.4335 2.4758 13.6124 2.47381 13.7915C2.90289 11.8354 3.42672 10.4755 3.92631 9.54096L1.61475 21.3284C1.61475 21.3284 3.74916 22.656 7.7757 22.656C11.8022 22.656 13.9369 21.3284 13.9369 21.3284L13.2411 17.7809C13.4613 17.7654 13.6384 17.5936 13.6706 17.3709C13.7857 17.7753 14.1445 18.0579 14.554 18.0579C14.5912 18.0579 14.6286 18.0556 14.6665 18.051C15.064 18.001 15.3707 17.6957 15.4554 17.3129ZM11.8811 10.0541C12.4577 11.2908 13.0381 13.1271 13.4477 15.8061C13.2523 15.9638 13.0881 16.1609 12.968 16.3873L11.6255 9.54214C11.7101 9.70027 11.7954 9.87063 11.8811 10.0541Z"
      fill="#018CB5"
    />
    <Path
      d="M2.47778 13.2594C2.47536 11.5689 2.38366 10.094 2.20266 8.81789C2.20266 8.81789 -0.695957 16.3873 0.157126 17.3709C1.01021 18.3544 1.77161 17.3122 1.79219 17.2871C1.81278 17.262 2.4738 13.7918 2.4738 13.7918L2.47381 13.7915C2.4758 13.6124 2.47778 13.4335 2.47778 13.2594Z"
      fill="#018CB5"
    />
    <Path
      d="M10.7541 5.56883C11.137 3.86329 10.1147 2.15872 8.4708 1.76156C6.82691 1.36441 5.18393 2.42506 4.80109 4.1306C4.41826 5.83614 5.44054 7.54071 7.08443 7.93786C8.72832 8.33502 10.3713 7.27436 10.7541 5.56883Z"
      fill="#018CB5"
    />
  </Svg>
);
export default Grandparents;
