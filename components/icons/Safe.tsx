import React from "react";

const SafeIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="#EE9907" {...props}>
      <path d="M41.0583 1.48837e-07H0.731777C0.633502 -6.25472e-05 0.536222 0.0196829 0.445749 0.0580572C0.355276 0.0964314 0.273466 0.152647 0.205205 0.223346C0.136943 0.294045 0.083632 0.377777 0.0484549 0.469541C0.0132778 0.561304 -0.00304326 0.659216 0.000466577 0.757428V37.1466C0.000466577 37.3406 0.0775151 37.5266 0.214662 37.6637C0.35181 37.8009 0.537821 37.8779 0.731777 37.8779H5.82483V41.2407C5.82134 41.3367 5.83681 41.4325 5.87037 41.5226C5.90393 41.6126 5.95492 41.6952 6.02041 41.7656C6.08591 41.8359 6.16463 41.8927 6.25207 41.9326C6.33951 41.9725 6.43396 41.9947 6.53002 41.9981H12.276C12.3786 42.0055 12.4816 41.9912 12.5783 41.9561C12.6749 41.9211 12.7631 41.866 12.8371 41.7945C12.911 41.723 12.9691 41.6367 13.0074 41.5413C13.0457 41.4459 13.0635 41.3434 13.0596 41.2407V37.8779H28.7305V41.2407C28.7305 41.3367 28.7494 41.4318 28.7862 41.5205C28.8229 41.6092 28.8768 41.6899 28.9447 41.7578C29.0126 41.8257 29.0932 41.8796 29.182 41.9163C29.2707 41.9531 29.3658 41.972 29.4618 41.972H35.2601C35.4495 41.9652 35.6288 41.8852 35.7604 41.7488C35.8919 41.6123 35.9654 41.4302 35.9653 41.2407V37.8779H41.0583C41.1543 37.8779 41.2494 37.859 41.3382 37.8223C41.4269 37.7855 41.5075 37.7317 41.5754 37.6637C41.6433 37.5958 41.6972 37.5152 41.7339 37.4265C41.7707 37.3378 41.7896 37.2427 41.7896 37.1466V0.757428C41.7931 0.659216 41.7768 0.561304 41.7416 0.469541C41.7064 0.377777 41.6531 0.294045 41.5849 0.223346C41.5166 0.152647 41.4348 0.0964314 41.3443 0.0580572C41.2539 0.0196829 41.1566 -6.25472e-05 41.0583 1.48837e-07ZM11.5643 40.5289H7.29398V37.9759H11.5643V40.542V40.5289ZM34.4961 40.5289H30.2258V37.9759H34.4961V40.5289ZM4.8911 4.62945H36.8859V33.4052H4.8911V4.62945ZM3.42195 23.9831H1.46309V13.9145H3.42195V23.9831ZM40.3205 36.3892H1.46962V25.4522H3.42848V34.13C3.42848 34.3239 3.50553 34.5099 3.64268 34.6471C3.77983 34.7842 3.96584 34.8613 4.15979 34.8613H37.6368C37.8308 34.8613 38.0168 34.7842 38.1539 34.6471C38.2911 34.5099 38.3681 34.3239 38.3681 34.13V3.89814C38.369 3.80156 38.3507 3.70576 38.3143 3.61628C38.278 3.5268 38.2242 3.44541 38.1563 3.3768C38.0883 3.3082 38.0073 3.25375 37.9182 3.21659C37.829 3.17943 37.7334 3.1603 37.6368 3.1603H4.15326C4.05667 3.1603 3.96104 3.17943 3.87189 3.21659C3.78273 3.25375 3.70182 3.3082 3.63383 3.3768C3.56583 3.44541 3.5121 3.5268 3.47574 3.61628C3.43937 3.70576 3.42109 3.80156 3.42195 3.89814V12.4453H1.46309V1.46915H40.3139V36.4088L40.3205 36.3892Z"/>
      <path d="M27.9599 11.9945L27.9012 11.9292L27.8359 11.8705C25.9845 10.0497 23.4917 9.0293 20.895 9.0293C18.2982 9.0293 15.8055 10.0497 13.954 11.8705L13.8887 11.9292L13.83 11.9945C12.006 13.8443 10.9835 16.3377 10.9835 18.9355C10.9835 21.5332 12.006 24.0266 13.83 25.8764L13.8887 25.9482L13.954 26.007C15.8046 27.8293 18.2977 28.8508 20.895 28.8508C23.4922 28.8508 25.9853 27.8293 27.8359 26.007C27.8604 25.9933 27.8824 25.9756 27.9012 25.9547L27.9599 25.8894C29.7843 24.0386 30.807 21.5441 30.807 18.9453C30.807 16.3464 29.7843 13.852 27.9599 12.0011V11.9945ZM27.8163 19.6929H29.305C29.149 21.4197 28.465 23.0566 27.3462 24.3811L26.2949 23.3364C26.2267 23.2682 26.1458 23.2141 26.0567 23.1772C25.9677 23.1403 25.8722 23.1214 25.7758 23.1214C25.6794 23.1214 25.5839 23.1403 25.4949 23.1772C25.4058 23.2141 25.3249 23.2682 25.2567 23.3364C25.1885 23.4045 25.1345 23.4855 25.0976 23.5745C25.0607 23.6636 25.0417 23.7591 25.0417 23.8555C25.0417 23.9519 25.0607 24.0473 25.0976 24.1364C25.1345 24.2255 25.1885 24.3064 25.2567 24.3746L26.308 25.4193C24.9832 26.542 23.343 27.2264 21.6132 27.3782V25.8633C21.6132 25.6694 21.5362 25.4833 21.399 25.3462C21.2619 25.2091 21.0758 25.132 20.8819 25.132C20.6879 25.132 20.5019 25.2091 20.3648 25.3462C20.2276 25.4833 20.1506 25.6694 20.1506 25.8633V27.3455C18.4208 27.1937 16.7806 26.5093 15.4558 25.3867L16.5071 24.3419C16.5753 24.2738 16.6293 24.1928 16.6662 24.1038C16.7031 24.0147 16.7221 23.9192 16.7221 23.8228C16.7221 23.7264 16.7031 23.631 16.6662 23.5419C16.6293 23.4528 16.5753 23.3719 16.5071 23.3037C16.4389 23.2356 16.358 23.1815 16.2689 23.1446C16.1799 23.1077 16.0844 23.0887 15.988 23.0887C15.8916 23.0887 15.7961 23.1077 15.7071 23.1446C15.618 23.1815 15.5371 23.2356 15.4689 23.3037L14.4176 24.3485C13.2988 23.0239 12.6148 21.387 12.4588 19.6602H13.9736C14.1565 19.643 14.3264 19.5581 14.45 19.4223C14.5736 19.2864 14.6421 19.1093 14.6421 18.9257C14.6421 18.742 14.5736 18.5649 14.45 18.4291C14.3264 18.2932 14.1565 18.2084 13.9736 18.1911H12.4849C12.6409 16.4643 13.3249 14.8274 14.4438 13.5029L15.495 14.5476C15.5624 14.6159 15.6428 14.6701 15.7313 14.7071C15.8199 14.7441 15.9149 14.7631 16.0108 14.7631C16.1556 14.7621 16.2969 14.7185 16.4171 14.6377C16.5373 14.557 16.6311 14.4427 16.6867 14.309C16.7424 14.1754 16.7576 14.0283 16.7303 13.8861C16.703 13.7439 16.6344 13.6129 16.5332 13.5094L15.4689 12.5104C16.792 11.3851 18.4331 10.7004 20.1636 10.5515V12.0337C20.1636 12.2277 20.2407 12.4137 20.3778 12.5508C20.515 12.688 20.701 12.765 20.895 12.765C21.0889 12.765 21.2749 12.688 21.4121 12.5508C21.5492 12.4137 21.6263 12.2277 21.6263 12.0337V10.5515C23.3568 10.7004 24.9979 11.3851 26.321 12.5104L25.2698 13.5551C25.1685 13.6586 25.1 13.7896 25.0727 13.9318C25.0454 14.074 25.0605 14.2211 25.1162 14.3547C25.1719 14.4884 25.2657 14.6027 25.3859 14.6834C25.5061 14.7642 25.6473 14.8078 25.7921 14.8088C25.8881 14.8088 25.9831 14.7898 26.0716 14.7528C26.1602 14.7158 26.2405 14.6616 26.308 14.5933L27.3592 13.5486C28.4781 14.8731 29.162 16.51 29.3181 18.2368H27.8163C27.6334 18.2541 27.4635 18.3389 27.3399 18.4748C27.2163 18.6106 27.1478 18.7877 27.1478 18.9714C27.1478 19.1551 27.2163 19.3321 27.3399 19.468C27.4635 19.6038 27.6334 19.6887 27.8163 19.7059V19.6929Z"/>
      <path d="M20.8947 15.2656C20.1671 15.2643 19.4554 15.479 18.8499 15.8825C18.2444 16.2859 17.7722 16.86 17.4931 17.532C17.2141 18.2039 17.1407 18.9436 17.2824 19.6573C17.424 20.3711 17.7742 21.0267 18.2888 21.5412C18.8033 22.0557 19.4589 22.4059 20.1726 22.5476C20.8863 22.6892 21.626 22.6159 22.298 22.3368C22.97 22.0578 23.544 21.5856 23.9475 20.98C24.3509 20.3745 24.5656 19.6629 24.5643 18.9352C24.5643 17.962 24.1777 17.0286 23.4895 16.3404C22.8013 15.6522 21.8679 15.2656 20.8947 15.2656ZM20.8947 21.1422C20.4579 21.1435 20.0306 21.0152 19.6668 20.7735C19.303 20.5317 19.0191 20.1875 18.8511 19.7844C18.683 19.3812 18.6384 18.9372 18.7228 18.5087C18.8072 18.0802 19.0169 17.6863 19.3253 17.377C19.6337 17.0677 20.0269 16.8568 20.4552 16.7711C20.8835 16.6855 21.3276 16.7288 21.7312 16.8956C22.1349 17.0625 22.48 17.3453 22.7228 17.7084C22.9656 18.0715 23.0952 18.4985 23.0952 18.9352C23.0952 19.5194 22.8635 20.0798 22.4511 20.4935C22.0386 20.9072 21.4789 21.1405 20.8947 21.1422Z"/>
    </svg>
  )
}

export default SafeIcon;
