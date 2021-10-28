import React from "react";

const TransactionIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="110"
      viewBox="0 0 120 110"
      fill="black"
      stroke="white"
      strokeWidth="2"
      {...props}
    >
      <path d="M20.8492 0.00518741C20.1332 0.0726855 19.4683 0.405641 18.9853 0.938674C18.5024 1.47171 18.2363 2.16619 18.2394 2.88554V17.2876H9.60019C9.51025 17.2833 9.42015 17.2833 9.33021 17.2876C8.61419 17.3551 7.94934 17.6881 7.46638 18.2211C6.98344 18.7542 6.71735 19.4487 6.72045 20.168V43.2113H3.8407C3.75076 43.207 3.66067 43.207 3.57073 43.2113C2.85471 43.2788 2.18984 43.6117 1.70689 44.1447C1.22394 44.6778 0.957857 45.3723 0.960964 46.0917V69.135C0.961034 69.8989 1.26445 70.6316 1.80449 71.1717C2.34454 71.7119 3.07697 72.0154 3.8407 72.0155H6.72045V94.1585C6.52005 94.7856 6.54022 95.4623 6.7776 96.0763C7.01498 96.6904 7.45528 97.2048 8.02533 97.5339C8.05467 97.5643 8.08467 97.5939 8.11531 97.623C8.15994 97.639 8.20495 97.6539 8.2503 97.6677C8.33787 97.7175 8.42798 97.7626 8.52028 97.803C8.55001 97.8184 8.58001 97.8333 8.61026 97.8477C8.66976 97.8645 8.72979 97.8794 8.79025 97.8923C8.83523 97.8934 8.88024 97.8934 8.92523 97.8923C8.96985 97.9083 9.01486 97.9232 9.06022 97.937C9.10521 97.938 9.15021 97.938 9.1952 97.937C9.53734 97.9995 9.88797 97.9995 10.2301 97.937H74.3943C74.7758 97.9421 75.1544 97.8715 75.5083 97.729C75.8622 97.5866 76.1843 97.3753 76.4558 97.1073C76.7274 96.8393 76.943 96.5199 77.0902 96.1679C77.2373 95.8159 77.3131 95.4382 77.3131 95.0566C77.3131 94.6751 77.2373 94.2973 77.0902 93.9453C76.943 93.5933 76.7274 93.2739 76.4558 93.006C76.1843 92.738 75.8622 92.5267 75.5083 92.3842C75.1544 92.2418 74.7758 92.171 74.3943 92.1761H12.4799V72.0135H55.676C56.4398 72.0134 57.1722 71.7099 57.7122 71.1697C58.2523 70.6295 58.5557 69.8969 58.5558 69.133V46.0897C58.5557 45.3258 58.2523 44.5932 57.7122 44.053C57.1722 43.5128 56.4398 43.2093 55.676 43.2092H12.4799V23.0463H100.312H103.192C104.741 23.0463 106.195 22.6909 107.511 22.0562V59.0515C107.506 59.4332 107.576 59.8122 107.719 60.1664C107.861 60.5206 108.072 60.843 108.34 61.1148C108.608 61.3867 108.927 61.6025 109.28 61.7498C109.632 61.8972 110.009 61.973 110.391 61.973C110.773 61.973 111.151 61.8972 111.503 61.7498C111.855 61.6025 112.174 61.3867 112.442 61.1148C112.71 60.843 112.921 60.5206 113.063 60.1664C113.206 59.8122 113.276 59.4332 113.271 59.0515V12.9649V11.5247C113.275 11.4348 113.275 11.3447 113.271 11.2547V10.0846C113.271 4.5493 108.726 0.00316593 103.192 0.00316593H21.1191C21.0292 -0.00105531 20.9391 -0.00105531 20.8492 0.00316593L20.8492 0.00518741ZM23.9989 5.76598H103.192C105.635 5.76598 107.511 7.64317 107.511 10.0866V11.3018C107.508 11.3768 107.508 11.4518 107.511 11.5268V12.9669C107.511 15.4104 105.635 17.2876 103.192 17.2876H100.312H23.9989V5.76598ZM6.72045 48.972H52.7963V66.2546H6.72045V48.972ZM44.1571 50.4122C40.2151 50.4122 36.9577 53.6704 36.9577 57.6134C36.9577 61.5563 40.2151 64.8143 44.1571 64.8143C48.0991 64.8143 51.3564 61.5563 51.3564 57.6134C51.3564 53.6704 48.0991 50.4122 44.1571 50.4122ZM44.1571 56.1731C44.9864 56.1731 45.5969 56.7839 45.5969 57.6134C45.5969 58.4429 44.9864 59.0535 44.1571 59.0535C43.3278 59.0535 42.7172 58.4429 42.7172 57.6134C42.7172 56.7839 43.3278 56.1731 44.1571 56.1731ZM95.8574 60.4488C95.208 60.4838 94.5895 60.7375 94.1026 61.1689L82.5836 71.2501C82.2696 71.5206 82.0177 71.8555 81.845 72.2322C81.6723 72.6089 81.5829 73.0185 81.5829 73.433C81.5829 73.8474 81.6723 74.257 81.845 74.6337C82.0177 75.0105 82.2696 75.3455 82.5836 75.6159L94.1026 85.6973C94.3889 85.9475 94.7218 86.1388 95.0821 86.26C95.4425 86.3812 95.8233 86.4298 96.2025 86.4034C96.5818 86.377 96.9521 86.276 97.2923 86.106C97.6324 85.9361 97.9356 85.7006 98.1845 85.4132C98.4333 85.1257 98.623 84.7919 98.7426 84.4309C98.8621 84.0699 98.9092 83.6888 98.8811 83.3096C98.8531 82.9304 98.7504 82.5604 98.5789 82.221C98.4075 81.8815 98.1708 81.5794 97.8822 81.3317L92.1678 76.336H113.271C113.653 76.3418 114.032 76.2716 114.386 76.1295C114.741 75.9873 115.063 75.7761 115.336 75.5081C115.608 75.24 115.824 74.9205 115.971 74.5682C116.119 74.2158 116.195 73.8376 116.195 73.4557C116.195 73.0737 116.119 72.6955 115.971 72.3431C115.824 71.9908 115.608 71.6714 115.336 71.4033C115.063 71.1353 114.741 70.924 114.386 70.7818C114.032 70.6397 113.653 70.5695 113.271 70.5753H92.1228L97.8822 65.5344C98.3478 65.1453 98.6786 64.619 98.8275 64.0307C98.9763 63.4424 98.9356 62.822 98.7111 62.2582C98.4866 61.6944 98.0899 61.2159 97.5774 60.891C97.065 60.5661 96.463 60.4113 95.8574 60.4488ZM104.407 83.4918C103.832 83.5281 103.281 83.736 102.825 84.0887C102.37 84.4415 102.03 84.9227 101.851 85.4704C101.672 86.018 101.661 86.6069 101.82 87.1609C101.978 87.7148 102.3 88.2083 102.742 88.5777L108.501 93.6185H87.3532C87.2633 93.6143 87.1732 93.6143 87.0832 93.6185C86.7036 93.6342 86.3308 93.7248 85.9863 93.885C85.6418 94.0453 85.3324 94.272 85.0758 94.5523C84.8193 94.8326 84.6206 95.1609 84.4913 95.5182C84.362 95.8756 84.3046 96.255 84.3224 96.6346C84.3402 97.0142 84.4328 97.3866 84.595 97.7302C84.7571 98.0739 84.9856 98.3822 85.2673 98.6373C85.5489 98.8923 85.8782 99.0891 86.2362 99.2165C86.5942 99.3438 86.9738 99.3992 87.3532 99.3792H108.456L102.742 104.375C102.165 104.877 101.811 105.587 101.757 106.35C101.703 107.113 101.954 107.866 102.454 108.444C102.955 109.022 103.664 109.378 104.426 109.433C105.189 109.489 105.942 109.24 106.521 108.74L118.04 98.6589C118.354 98.3885 118.606 98.0535 118.779 97.6768C118.952 97.3001 119.041 96.8906 119.041 96.4762C119.041 96.0618 118.952 95.6523 118.779 95.2756C118.606 94.899 118.354 94.564 118.04 94.2935L106.521 84.2121C106.235 83.9572 105.9 83.7622 105.537 83.6385C105.174 83.5148 104.789 83.4649 104.407 83.4918Z" />
    </svg>
  );
};

export default TransactionIcon;