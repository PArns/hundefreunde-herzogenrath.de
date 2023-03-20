import * as React from "react";

const TopDivider = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 75"
      preserveAspectRatio="none slice"
      xmlSpace="preserve"
      fill={fill}
    >
      <g>
        <path d="M14.861 51.329c1.581-.04 1.799-2.656 1.096-4.103-.703-1.446-2.633-2.415-3.731-2.743-1.098-.328-2.042.682-2.095 1.165 0 0-.201.426-.078 1.211.064.408.216.913.529 1.506.267.505.607.97.995 1.376.942.985 2.164 1.616 3.284 1.588zM20.249 48.933c1.197-.284 1.593-2.026 1.569-3.582-.011-.722-.113-1.403-.268-1.88-.269-.831-1.018-1.892-1.917-2.25-.729-.29-1.557-.117-2.309 1.018 0 0-1.193 1.938-.612 3.62.582 1.682 1.785 3.49 3.537 3.074zM24.252 46.134s-.609 1.111-.779 2.348c-.08.582-.062 1.193.162 1.728.445 1.062 1.047 1.766 1.784 1.951.425.107.896.041 1.406-.229 1.396-.739 2.192-3.546 1.276-5.278-.915-1.73-2.631-2.528-3.849-.52zM14.772 55.782c.014-.525-.257-1.132-.847-1.913a3.916 3.916 0 0 0-.404-.453c-1.267-1.221-3.12-1.433-3.12-1.433-3.403.323-2.168 3.59-.886 4.617 1.282 1.027 3.024 1.64 4.255.705.639-.486.987-.956 1.002-1.523zM26.368 53.955c-1.897-1.311-4.418-2.152-5.452-2.362-1.243-.252-2.924.296-3.224 1.478 0 0-1.231 2.324-1.83 4.772-.227.929-.363 1.877-.306 2.722.178 2.632 1.819 3.072 3.075 2.513.21-.094.41-.215.59-.359 1.255-1.005 2.741-3.439 5.499-3.817 1.572-.216 2.837-.935 3.288-1.845.34-.687.217-1.482-.588-2.253a8.496 8.496 0 0 0-1.052-.849z" />
      </g>
      <path d="M803.667 141.473C535.778 72.174 267.889 167.787 0 113.193V74.14c267.889-54.594 535.778 41.02 803.667-28.28v95.613z" />
      <path d="M685.825 18.802s.16-.685.374-.727c.214-.043.694-.342.961-.342s1.816-.556 2.51-.77a6.457 6.457 0 0 1 3.898 0c1.762.556 2.724.899 2.991.984.267.086-.053.086.427.385.481.3.961.642 1.549.642.587 0 .961-.043 1.762.599s1.709 1.155 1.228 2.097c-.481.941-.694.984-.427 1.284.267.3 1.549 1.412 1.709 1.883.16.471.481 1.583.694 1.883.214.3 2.617 2.952 4.646 3.637s4.913.727 6.302.556c1.388-.171 10.894-1.797 12.817-1.669 1.923.128 3.738.171 4.806.599 1.068.428 1.442.77 1.442.77l2.296-.171c.587-.043 3.364-.171 5.127-.043 1.762.128 4.326.428 5.127.385.801-.043 4.059-.428 5.714-1.155s2.51-1.284 2.51-1.284.427 2.268 0 2.396c-.427.128-.32.471-1.228.984-.908.513-3.471 1.369-3.952 1.712-.481.342-1.121.556-2.67.556s-6.515-.214-7.209-.3-2.296-.214-2.083.086 2.51 3.423 2.67 4.963c.16 1.54.534 4.664.214 5.691-.32 1.027.053 2.91-.053 3.637s.32 1.925.908 2.567c.587.642 1.762 2.182 2.029 2.311.267.128.427.171.427.813s.053 5.563.107 6.076c.053.513-.107 1.583.16 1.883.267.3.32.385.214 1.198-.107.813-.107.856.053 1.241s.267.727-.16 1.241 0 .727-.587.899c-.587.171-.374.171-1.282.171s-3.097.214-2.67-.984c.427-1.198.214-1.027.961-1.54.748-.513.961-.128.908-1.712-.053-1.583-.427-4.322-1.228-5.52-.801-1.198-1.175-2.696-1.816-3.166-.641-.471-2.35-2.054-3.311-3.252-.961-1.198-1.762-2.225-2.243-2.439-.481-.214-.481 1.027-.32 1.198.16.171 1.282 2.139 1.656 2.225s.481.599.427.941c-.053.342 0 2.482 0 3.038 0 .556.16 2.952.16 3.937s-.427 1.968-.32 2.696.107 1.284-.16 1.412c-.267.128-.32.513-.641.727-.32.214-.801.471-1.923.385-1.121-.086-2.937-.043-2.51-.941.427-.899.481-1.326 1.122-1.498.641-.171 1.121.342 1.335-.257.214-.599.534-4.707-.053-5.605-.587-.899-.908-2.91-2.136-4.065-1.228-1.155-3.258-2.396-3.364-3.081-.107-.685-.053-1.84-.748-1.754-.694.086-1.976-.899-2.991-.385-1.015.513-2.724 1.455-3.418 1.883-.694.428-3.258 1.412-4.112 1.669-.854.257-2.51.513-2.67.513-.16 0 .053.428-.053.984-.107.556-.641 6.076-.481 6.846.16.77.267 3.466.427 4.536.16 1.07.267 1.583 0 1.669-.267.086-.427.128-.587.428-.16.3-1.068 2.396-1.015 3.038.053.642.32 1.412-.107 1.84-.427.428-.748.556-2.029.77s-4.059.642-3.685-.513c.374-1.155.107-1.155.908-1.498.801-.342 1.656-.3 1.923-.856.267-.556.374-2.91.427-3.423.053-.513.16-5.349-.16-6.547-.32-1.198-.427-2.054-.427-2.567 0-.513-.214-2.139-.214-2.482s-.107-.471-.534-.856-.16-.727-.748-.727c-.587 0-2.991-.257-3.044.3-.053.556-.374 6.889-.214 7.231s.427 2.139.427 2.567c0 .428.16.813-.16 1.455-.32.642-.641.899-.694 1.455-.053.556 0 3.081-.214 3.38s-.694.984-1.495 1.155c-.801.171-.961-.043-.961-.043s-.214.342-.534.428c-.32.086-4.112.257-3.204-.941.908-1.198 1.388-1.155 1.923-1.326s.801-.342.908-.899.641-1.968.801-2.097c.16-.128-.053-1.284-.053-1.883s.427-1.669.16-2.225-2.243-6.376-2.243-7.274c0-.899-.427-1.968-.32-2.525.107-.556.267-.642-.32-1.07-.587-.428-4.86-3.894-4.7-7.103s.641-4.151.32-4.621c-.32-.471-.641-.727-1.282-1.412-.641-.685-.694-1.754-.748-2.824-.053-1.07.053-2.824-.32-3.038-.374-.214-.587-.984-1.228-.984s-1.656-.428-2.403-.3c-.748.128-2.296.257-2.83.043-.534-.214-.481-.043-1.228-.385-.748-.342-1.976-3.808-1.816-4.108.16-.3.896-1.07.896-1.07s.653-.043.92-.128c.267-.086 2.19-.599 2.563-.856.374-.257.641-.941.534-1.455s0-1.241.374-1.326c.374-.086.694-.257.694-.257l-.11-.599zM44.148 61.362c-1.769 2.193 3.106 2.444 4.953 2.945l.123.032c-.472.013-.943.009-1.409-.015 1.095.244 2.225.394 3.358.422.42.08.883.165 1.379.254a17.7 17.7 0 0 1-2.278.032c1.544.345 3.158.498 4.749.39.677.111 1.374.22 2.074.326-.545.022-1.089.018-1.627-.009 1.457.325 2.976.482 4.48.409.401.051.794.099 1.173.142-1.12.168-2.258.213-3.371.157 2.211.494 4.565.6 6.791.099.315 0 .577-.014.775-.045 2.418-.376 3.803 1.723 5.13 1.849 1.327.125 4.364.658 6.044 1.128 1.681.47 2.477.932 2.926 1.003.45.071.899.509.973.321.074-.188.985-.29 1.418-.102.432.188.393-.063.442-.146.049-.084.973.272.737-.084-.236-.355.02-.961-.275-1.588-.295-.627-.943-.94-.629-1.17.189-.138.733-.571 1.503-1.419a11.502 11.502 0 0 1-.548 1.642c.447-.714.817-1.478 1.098-2.276.203-.244.416-.511.638-.804-.125.435-.275.863-.45 1.281.407-.649.748-1.341 1.018-2.061l.042-.06c.07-.1.137-.204.204-.307a11.46 11.46 0 0 1-.622 1.95 11.5 11.5 0 0 0 .543-.97c-.025.062-.048.124-.074.186.286-.457.54-.935.76-1.429a11.297 11.297 0 0 1-.76 2.691 11.36 11.36 0 0 0 1.543-3.934c.502-.843.896-1.753 1.167-2.701-.024.118-.05.236-.078.354-.041.107-.084.214-.128.321.029-.046.056-.094.084-.14-.14.549-.32 1.088-.54 1.611a11.407 11.407 0 0 0 1.434-3.423c.076-.197.146-.396.211-.597a16.23 16.23 0 0 1-.021.311c-.104.326-.221.649-.354.965.108-.172.209-.347.308-.525a11.317 11.317 0 0 1-.795 2.957 11.265 11.265 0 0 0 1.688-5.017c.269-.838.44-1.709.501-2.593a.35.35 0 0 1 .07-.011 12.452 12.452 0 0 0 1.35 4.394 12.174 12.174 0 0 1-.683-3.838c.116.214.219.47.307.735a12.326 12.326 0 0 0 1.408 5.171 12.361 12.361 0 0 1-.635-2.918c.117.258.25.536.393.826.242 1.02.613 2.009 1.097 2.937a12.638 12.638 0 0 1-.455-1.672c.866 1.657 1.853 3.385 2.297 4.082.826 1.295 1.228 3.055 1.582 4.183.354 1.128 1.238.987 1.342 1.567.103.58 1.322 2.24 1.774 2.219.452-.021 1.71.428 1.936.136.226-.292.786-.073 1.327-.157.541-.084.177-.261.413-.397s.639.198.531-.094c-.108-.292-.658-.648-.55-.648.108 0 .197-.157-.079-.616-.275-.46-.216-.564-.521-.668-.305-.104-.511-.282-.256-.376.256-.094.855-.125.609-.303s-.383-.574-.57-.877c-.187-.303-.393-.909-.865-1.065-.472-.157-1.091.198-1.219-.063-.128-.261-.629-3.812-.6-5.755.029-1.943-1.002-7.081-.59-9.588.323-1.962 1.44-3.501 2.815-5.339-.127.446-.279.885-.459 1.313.235-.374.447-.763.638-1.162.202-.364.384-.738.546-1.123l.169-.23a12.83 12.83 0 0 1-.334 1.14c.136-.259.262-.523.38-.791l-.05.154c.228-.435.43-.883.606-1.342.16-.228.306-.443.44-.646-.148.67-.358 1.328-.624 1.962.235-.374.447-.763.638-1.162.308-.554.571-1.135.784-1.734.013.505-.002 1.012-.049 1.517.204-.835.324-1.69.358-2.546l.003-.013a12.87 12.87 0 0 1-.032 1.923c.275-1.127.399-2.29.361-3.445.016-.085.031-.17.045-.256.132.95.152 1.921.063 2.887.452-1.851.499-3.799.082-5.646a11.678 11.678 0 0 0-.295-2.013c-.019-.45-.015-.9.014-1.347.062.5.151.997.27 1.487a12.679 12.679 0 0 1-.028-2.015c.05.286.108.571.177.854a12.638 12.638 0 0 1-.019-2.157c.012-.066.022-.132.035-.197a12.945 12.945 0 0 0 .367 3.139c-.199-2.121.126-4.268 1.045-6.153.749-.991 1.451-1.974 1.647-3.287.354-2.361.57-2.193 1.022-3.447.452-1.253 2.103-1.212 3.381-1.4 1.278-.188 2.457-.334 2.86-.836.403-.501 1.179-1.118 1.13-1.629-.049-.512-.079-.574-.904-.512-.826.063-1.405-.24-1.405-.24.609-.198 1.504-1.034 2.201-1.964.698-.93.256-1.556.393-1.817.138-.261.177-.679-.138-1.138-.314-.46-.452-.198-1.327-.031s-2.329.272-3.096.418c-.767.146-1.631.094-2.192-.146-.56-.24-.668-.93-.835-1.191-.167-.261-.973-.439-2.034-.731s-2.103.021-3.381.125c-1.278.104-1.671-1.441-2.889-2.361-1.219-.919-2.465-.83-2.005 1.003.157.627.531 2.653.845 3.363.315.71-.275 1.88-1.14 3.802-.865 1.922-1.71 3.844-2.889 5.013-1.179 1.17-4.246 5.348-6.958 6.977-2.713 1.629-3.381 3.969-4.56 4.93-1.179.961-3.263 3.342-6.486 7.478-1.056 1.355-2.167 3.032-3.245 4.755a11.025 11.025 0 0 0-2.281 3.282c.343-.514.726-.993 1.143-1.434l-.174.287a10.875 10.875 0 0 0-1.539 2.063c-1.322 1.038-2.378 2.421-3.105 4.009.259-.388.541-.756.843-1.103-.32.392-.614.809-.88 1.247-.413.264-.845.498-1.292.7.367-.093.728-.207 1.083-.34-.151.271-.294.549-.424.834.22-.33.456-.646.707-.946.08-.033.161-.066.24-.101-.541.616-1.015 1.3-1.414 2.038-.125.077-.251.151-.378.222.109-.038.217-.078.324-.12-.103.195-.202.392-.294.594.153-.23.315-.453.484-.669.155-.063.309-.131.461-.201-.212.39-.406.783-.586 1.161-.584.533-1.229.996-1.919 1.38a10.22 10.22 0 0 0 1.607-.718l-.18.381a10.29 10.29 0 0 1-1.898 1.361 10.282 10.282 0 0 0 1.563-.693c-.355.659-.683 1.07-1.05 1.001-.82-.154-2.113.111-3.138.213-2.204-2.001-5.016-3.156-7.875-3.571 1.649.523 3.256 1.312 4.669 2.375-2.26-1.234-4.841-1.764-7.377-1.723.317.047.633.105.948.171a7.786 7.786 0 0 0-1.282.057c-2.134-.216-4.277.331-6.172 1.395a10.564 10.564 0 0 1 2.811-.469c-.529.217-1.048.462-1.546.725-1.523.374-2.998.996-4.361 1.771a17.627 17.627 0 0 1 2.674-.751c-.86.595-1.578 1.221-2.054 1.812zm61.582-27.79l-.045-.14c-.002-.103-.004-.205-.003-.307.013.149.029.298.048.447zM87.016 61.989c.067-.404.112-.812.133-1.222.157-.356.311-.717.461-1.084a11.23 11.23 0 0 1-.594 2.306zm-17.169-7.406c-.111.171-.218.346-.32.523a10.34 10.34 0 0 1-.484.345c.252-.306.521-.596.804-.868zm1.059-1.913a8.42 8.42 0 0 1 .227-.197c-.074.067-.151.132-.227.197z" />
      <g>
        <path d="M770.973 31.159c.897 1.302 3.208.056 4.035-1.324.827-1.379.584-3.524.26-4.624-.325-1.099-1.687-1.338-2.12-1.118 0 0-.467.064-1.057.596-.307.277-.647.679-.972 1.266a6.192 6.192 0 0 0-.609 1.585c-.311 1.328-.173 2.696.463 3.619zM775.923 34.363c.891.847 2.568.227 3.857-.643.598-.404 1.114-.861 1.428-1.251.549-.679 1.029-1.886.837-2.834-.156-.769-.752-1.368-2.114-1.377 0 0-2.275.059-3.366 1.465-1.09 1.405-1.947 3.399-.642 4.64zM780.455 36.187s-1.263.097-2.392.631c-.531.251-1.033.599-1.359 1.08-.647.953-.908 1.842-.66 2.561.143.415.455.772.96 1.053 1.381.766 4.167-.101 5.117-1.815.95-1.714.681-3.587-1.666-3.51zM767.195 33.517c.447-.275.808-.834 1.139-1.755.07-.195.122-.391.159-.586.33-1.728-.504-3.396-.504-3.396-2.129-2.674-4.192.145-4.351 1.78-.159 1.635.278 3.429 1.734 3.949.756.27 1.34.305 1.823.008zM775.06 42.232c.062-2.305-.61-4.876-1-5.857-.468-1.178-1.846-2.287-2.999-1.893 0 0-2.619.238-4.997 1.074-.903.317-1.771.721-2.448 1.231-2.107 1.587-1.579 3.202-.425 3.948.193.125.404.226.623.298 1.528.502 4.378.417 6.201 2.52 1.04 1.199 2.333 1.866 3.342 1.746.761-.09 1.36-.628 1.566-1.724.082-.427.124-.88.137-1.343z" />
      </g>
    </svg>
  );
};

export default TopDivider;
