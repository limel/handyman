import cn from "classnames";
import s from "./ChatList.module.scss";

const ChatList = ({ chatList, activeChatId, setActiveChatId }) => {
  const handleChatClick = (chatId) => {
    setActiveChatId(chatId);
  };

  return (
    <aside className={s.container}>
      <h1 className={s.title}>
        <svg xmlns="http://www.w3.org/2000/svg" width="141" height="42" className={s.icon} viewBox="0 0  141 42">
          <path
            fill="currentColor"
            d="M55.774 1.17c0-.646-.354-1.17-.791-1.17-.437 0-.792.524-.792 1.17v39.72c0 .647.355 1.17.792 1.17.437 0 .791-.523.791-1.17V1.17Z"
          />
          <path
            fill="currentColor"
            d="m59.919 15.223 2.755-14.076h3.6l2.756 14.076h-2.659l-.483-2.795v.04h-3.021l-.483 2.755h-2.465Zm3.262-4.665h2.393L64.39 3.6h-.049l-1.16 6.958Zm10.828 4.867c-1.273 0-2.243-.302-2.91-.905-.67-.604-1.005-1.455-1.005-2.554V4.405c0-1.1.335-1.951 1.005-2.554.667-.604 1.637-.905 2.91-.905 1.272 0 2.243.301 2.91.905.67.603 1.005 1.454 1.005 2.554v1.488h-2.513v-1.63c0-.87-.444-1.306-1.33-1.306-.886 0-1.329.435-1.329 1.307v7.863c0 .857.443 1.287 1.33 1.287.885 0 1.329-.43 1.329-1.287V9.975h2.513v1.99c0 1.1-.335 1.951-1.005 2.555-.667.603-1.638.905-2.91.905Zm9.377 0c-1.289 0-2.272-.306-2.948-.917-.677-.609-1.015-1.483-1.015-2.623V1.147h2.658v10.9c0 .482.118.83.353 1.045.232.214.566.322 1 .322.436 0 .77-.108 1.006-.322.232-.214.348-.563.348-1.046v-10.9h2.562v10.74c0 1.139-.338 2.013-1.015 2.622-.677.611-1.66.917-2.949.917Zm5.85-.202V1.147h3.794l1.691 10.075h.049l1.692-10.075h3.794v14.076h-2.513V4.566h-.049l-1.933 10.657h-2.224L91.604 4.566h-.049v10.657h-2.32Zm13.002 0V1.147h7.25v2.01h-4.592v3.721h3.65V8.89h-3.65v4.324h4.592v2.01h-7.25Zm8.773 0V1.147h3.335l2.586 8.426h.049V1.147h2.368v14.076h-2.731l-3.19-10.275h-.048v10.275h-2.369ZM60.62 30.909V16.832h2.658v5.732h2.852v-5.732h2.658V30.91H66.13v-6.335h-2.852v6.335h-2.659Zm9.45 0 2.754-14.077h3.602L79.18 30.91h-2.659l-.483-2.795v.04h-3.021l-.484 2.755H70.07Zm3.262-4.665h2.393l-1.185-6.958h-.048l-1.16 6.957Zm7.13 4.665V16.832h3.335l2.586 8.426h.048v-8.426H88.8V30.91h-2.731l-3.19-10.276h-.049v10.276h-2.368Zm10.32 0V16.832h4.06c1.321 0 2.312.295 2.973.885.66.59.99 1.455.99 2.594v7.119c0 1.14-.33 2.004-.99 2.594-.661.59-1.652.885-2.973.885h-4.06Zm2.658-2.011h1.354c.435 0 .77-.107 1.005-.322.232-.214.348-.563.348-1.046v-7.32c0-.482-.116-.83-.348-1.045-.235-.214-.57-.322-1.005-.322H93.44v10.055Zm9.16 2.01v-5.992l-3.214-8.084h2.827L104.026 22h.048l1.813-5.168h2.586l-3.214 8.084v5.993H102.6Zm7.082 0V16.833h3.794l1.692 10.075h.048l1.692-10.075h3.795V30.91h-2.514V20.25h-.048l-1.934 10.658h-2.223L112.05 20.25h-.048v10.658h-2.32Zm12.302 0 2.755-14.076h3.601l2.755 14.077h-2.658l-.484-2.795v.04h-3.021l-.483 2.755h-2.465Zm3.262-4.665h2.393l-1.184-6.957h-.049l-1.16 6.957Zm7.13 4.666V16.832h3.335l2.586 8.426h.049v-8.426h2.368V30.91h-2.731l-3.19-10.276h-.048v10.276h-2.369Z"
          />
          <path
            fill="currentColor"
            d="M63.312 37.617v.537h-2.598v1.768h3.018v.537h-3.808v-4.987h3.766v.541h-2.976v1.604h2.598Zm1.514-.864 1.132 2.846 1.104-2.846h.777l-1.596 3.706h-.58l-1.614-3.707h.777Zm5.54 3.775c-.603 0-1.094-.165-1.473-.495-.379-.33-.568-.772-.568-1.325v-.116c0-.368.084-.696.253-.984a1.78 1.78 0 0 1 .708-.679c.304-.163.632-.244.986-.244.58 0 1.03.159 1.351.476.32.317.48.771.48 1.364v.263h-3.016c.01.365.138.66.385.886.245.224.557.336.935.336.27 0 .498-.045.685-.136.187-.092.35-.213.489-.363l.465.301c-.373.477-.933.716-1.68.716Zm-.094-3.322c-.308 0-.566.093-.773.279-.21.186-.339.447-.388.781h2.232v-.047c-.022-.322-.127-.571-.313-.748-.187-.177-.44-.265-.758-.265Zm4.865-.473v.59a2.733 2.733 0 0 0-.374-.025c-.5 0-.838.177-1.017.53v2.631h-.762v-3.707h.742l.012.43c.25-.331.603-.497 1.062-.497.148 0 .26.016.337.048Zm1.12.02 1.111 2.777 1.039-2.778h.814l-1.79 4.28c-.278.616-.719.924-1.323.924l-.143-.01-.285-.044v-.514l.206.013c.258 0 .46-.043.604-.13.143-.086.262-.245.355-.477l.169-.375-1.588-3.666h.83Zm3.915-.897h.76v.896h.832v.492h-.831v2.298c0 .147.037.259.11.334.075.074.202.11.38.11.088 0 .209-.013.363-.04v.513a2.628 2.628 0 0 1-.585.069c-.34 0-.598-.086-.77-.257-.173-.17-.259-.414-.259-.73v-2.297h-.81v-.492h.81v-.896Zm3.243-.658v2.004c.337-.345.776-.517 1.317-.517.942 0 1.417.442 1.424 1.325v2.45h-.76v-2.453c-.003-.268-.077-.465-.22-.592-.145-.128-.369-.193-.674-.193-.247 0-.464.055-.65.165-.187.11-.333.253-.437.432v2.64h-.76v-5.261h.76Zm4.71 1.554v3.707h-.763v-3.707h.762Zm-.824-.982c0-.103.038-.19.113-.26.076-.072.188-.107.336-.107.148 0 .26.035.337.107a.343.343 0 0 1 .115.26.33.33 0 0 1-.115.257c-.076.068-.189.103-.337.103-.148 0-.26-.035-.336-.103a.332.332 0 0 1-.113-.257Zm2.04.982h.722l.024.466c.34-.355.785-.533 1.334-.533.942 0 1.417.442 1.425 1.325v2.45h-.763v-2.453c-.002-.268-.075-.465-.219-.592-.144-.128-.368-.193-.672-.193-.248 0-.465.055-.651.165-.187.11-.333.253-.437.432v2.64h-.762v-3.707Zm4.47 1.823c0-.577.162-1.036.483-1.378.322-.341.747-.512 1.276-.512.544 0 .967.16 1.272.479l.037-.412h.696v3.619c0 .479-.17.857-.512 1.133-.342.276-.801.414-1.378.414-.32 0-.634-.057-.942-.17-.307-.115-.542-.272-.703-.47l.394-.38c.327.335.727.503 1.199.503.37 0 .658-.087.865-.26.208-.174.312-.419.312-.734v-.318c-.305.293-.72.439-1.248.439-.522 0-.944-.175-1.266-.525-.323-.349-.484-.825-.484-1.428Zm.768.072c0 .418.103.746.309.985.205.239.493.359.863.359.481 0 .834-.182 1.059-.546v-1.692c-.234-.354-.584-.53-1.05-.53-.37 0-.66.12-.869.359-.208.24-.312.595-.312 1.065Zm7.198-3.175v4.987h-.79v-4.987h.79Zm3.919 4.004a.442.442 0 0 0-.233-.399c-.155-.094-.425-.176-.811-.245a4.416 4.416 0 0 1-.917-.246c-.227-.096-.394-.21-.502-.343a.719.719 0 0 1-.164-.473c0-.303.155-.56.464-.77.309-.21.703-.315 1.183-.315.505 0 .915.109 1.23.326.313.216.47.493.47.832h-.765c0-.174-.089-.324-.265-.45-.178-.125-.401-.187-.67-.187-.277 0-.494.05-.65.15-.157.1-.235.232-.235.394 0 .153.073.267.218.345.146.078.409.152.789.223.38.071.688.156.924.254.236.098.411.216.524.354a.766.766 0 0 1 .172.506c0 .331-.159.596-.479.796-.318.2-.73.3-1.237.3-.358 0-.674-.052-.948-.157a1.524 1.524 0 0 1-.644-.44.947.947 0 0 1-.233-.612h.762c.014.212.116.38.307.505.19.124.442.186.756.186.288 0 .519-.048.693-.146.174-.096.261-.225.261-.388Zm6.162-.97h-1.412v1.953h-.791v-4.987h2.211c.656 0 1.171.139 1.543.418.371.278.556.647.556 1.107 0 .483-.181.856-.544 1.118-.365.26-.886.391-1.563.391Zm-1.412-2.493v1.956h1.42c.423 0 .746-.083.971-.248.226-.166.339-.405.339-.717a.86.86 0 0 0-.339-.713c-.225-.179-.533-.271-.926-.278h-1.465Zm4.153 2.604v-.045c0-.363.086-.69.258-.98.171-.29.409-.514.715-.671a2.27 2.27 0 0 1 1.049-.236c.606 0 1.097.175 1.472.523.374.35.562.815.562 1.395v.044c0 .36-.084.685-.25.972-.166.286-.404.51-.712.67a2.28 2.28 0 0 1-1.064.239c-.603 0-1.093-.175-1.468-.525-.375-.349-.562-.81-.562-1.386Zm.766.03c0 .411.114.741.344.99.229.249.536.373.92.373.387 0 .695-.126.923-.378.227-.252.34-.605.34-1.06 0-.407-.115-.736-.347-.989-.231-.252-.54-.377-.924-.377-.377 0-.68.124-.911.373-.23.249-.345.605-.345 1.068Zm6.837.829a.443.443 0 0 0-.232-.399c-.155-.094-.426-.176-.811-.245a4.41 4.41 0 0 1-.918-.246c-.227-.096-.394-.21-.502-.343a.719.719 0 0 1-.164-.473c0-.303.155-.56.464-.77.309-.21.704-.315 1.184-.315.504 0 .914.109 1.229.326.314.216.47.493.47.832h-.765c0-.174-.088-.324-.265-.45-.178-.125-.401-.187-.669-.187-.278 0-.495.05-.651.15-.156.1-.235.232-.235.394 0 .153.073.267.22.345.145.078.407.152.787.223.38.071.688.156.924.254.236.098.411.216.525.354a.771.771 0 0 1 .172.506c0 .331-.16.596-.478.796-.319.2-.732.3-1.239.3-.358 0-.673-.052-.948-.157a1.524 1.524 0 0 1-.644-.44.947.947 0 0 1-.233-.612h.763c.013.212.115.38.307.505.19.124.441.186.755.186.288 0 .519-.048.693-.146.174-.096.261-.225.261-.388Zm4.347 0a.443.443 0 0 0-.232-.399c-.155-.094-.426-.176-.811-.245a4.41 4.41 0 0 1-.918-.246c-.227-.096-.394-.21-.502-.343a.719.719 0 0 1-.164-.473c0-.303.155-.56.464-.77.309-.21.704-.315 1.184-.315.504 0 .914.109 1.229.326.314.216.47.493.47.832h-.765c0-.174-.088-.324-.265-.45-.178-.125-.401-.187-.669-.187-.278 0-.495.05-.651.15-.156.1-.235.232-.235.394 0 .153.073.267.218.345.146.078.409.152.789.223.38.071.688.156.924.254.236.098.411.216.525.354a.771.771 0 0 1 .172.506c0 .331-.16.596-.479.796-.318.2-.731.3-1.238.3a2.65 2.65 0 0 1-.948-.157 1.524 1.524 0 0 1-.644-.44.945.945 0 0 1-.232-.612h.762c.013.212.115.38.307.505.19.124.441.186.755.186.288 0 .519-.048.693-.146.174-.096.261-.225.261-.388Zm2.58-2.724v3.707h-.76v-3.707h.76Zm-.823-.982c0-.103.038-.19.113-.26.076-.072.188-.107.336-.107.148 0 .261.035.337.107a.34.34 0 0 1 .117.26.327.327 0 0 1-.117.257c-.076.068-.189.103-.337.103-.148 0-.26-.035-.336-.103a.333.333 0 0 1-.113-.257Zm5.813 2.822v.055c0 .566-.157 1.021-.469 1.365-.313.344-.732.516-1.26.516-.563 0-.998-.166-1.305-.497l-.037.428h-.7v-5.261h.763v1.963c.306-.317.73-.476 1.271-.476.541 0 .966.17 1.275.51.308.34.462.806.462 1.397Zm-.761-.017c0-.431-.1-.765-.302-1-.2-.235-.487-.353-.863-.353-.502 0-.863.195-1.082.583v1.602c.232.39.596.584 1.091.584.364 0 .648-.118.851-.354.204-.235.305-.589.305-1.062Zm2.548-3.377v5.261h-.762v-5.261h.762Zm3.066 5.33c-.604 0-1.095-.165-1.474-.495-.379-.33-.568-.772-.568-1.325v-.116c0-.368.084-.696.253-.984.168-.289.404-.515.708-.679.303-.163.632-.244.986-.244.579 0 1.029.159 1.351.476.32.317.48.771.48 1.364v.263h-3.016c.011.365.139.66.384.886.246.224.559.336.938.336.268 0 .496-.045.683-.136a1.67 1.67 0 0 0 .489-.363l.465.301c-.373.477-.933.716-1.679.716Zm-.095-3.322c-.307 0-.565.093-.774.279-.209.186-.338.447-.388.781h2.233v-.047c-.023-.322-.127-.571-.314-.748-.186-.177-.439-.265-.757-.265Z"
          />
          <path
            fill="currentColor"
            d="M26.63 28.082 42.58 41.35s1.944 1.619 5.406-1.262c3.462-2.88 1.516-4.498 1.516-4.498l-14.5-12.065c-2.511.566-4.485 1.192-5.193 1.783l-3.18 2.774ZM22.98 16.434 12.873 8.026l-1.924-3.734L3.539.258.115 3.106l4.847 6.166 4.488 1.602 10.034 8.348 2.217-1.484c.46-.39.88-.834 1.28-1.304Z"
          />
          <path
            fill="currentColor"
            d="m49.91 7.486-9.594 3.46-1.863-3.75.204-1.88 8.015-2.907S42.15.015 37.424.869c-4.726.857-5.753 1.025-6.78 3.593-1.027 2.563-2.465 10.6-7.397 14.703L1.897 33.45s-3.704 3.47.003 6.555c3.707 3.084 7.876.001 7.876.001L28.18 23.951c3.082-2.565 16.643-3.933 16.643-3.933l-2.26-4.55c5.253-2.142 7.346-7.982 7.346-7.982ZM8.13 38.466c-1.209 1.007-3.174 1.007-4.384 0-1.208-1.007-1.208-2.639.002-3.646 1.21-1.009 3.173-1.009 4.382 0 1.21 1.005 1.21 2.637 0 3.646Z"
          />
        </svg>
        Active Users
      </h1>
      <ul className={s.list}>
        {chatList.map((chat) => {
          return (
            <li
              tabIndex={0}
              key={chat.socketId}
              className={cn(s.list__chat, {
                [s.active]: chat.socketId === activeChatId,
              })}
              onClick={() => handleChatClick(chat.socketId)}
            >
              {chat.chat_name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ChatList;
