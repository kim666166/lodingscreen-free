/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "Yqtoz4Sw_40", name: "Jamie N Commons - Karma"},
	{youtube: "182TRJq9Zt8", name: "Sam Smith - Leave Your Lover"},
	{youtube: "BiQIc7fG9pA", name: "gnash - i hate u, i love u (ft. olivia o'brien)"},
	{youtube: "48VSP-atSeI", name: "Maroon 5 - Sugar"},
	{youtube: "GFQYaoiIFh8", name: "Demons - Imagine Dragons"},
	{youtube: "VdHAgXsiqR4", name: "DIA 다이아 - 그 길에서 (On the road)"},
	{youtube: "Yim4--J44gk", name: "OneRepublic - Counting Stars"},
	{youtube: "2B50RUXbs-8", name: "Rihanna - Love The Way You Lie (Part 2)"},
	{youtube: "fmiEBlS5dCk", name: "한동근 - 이 소설의 끝을 다시 써 보려 해"},
	{youtube: "Ye8U1KL_iQ8", name: "정준영 - 공감 (Feat. 서영은)"},
	{youtube: "CDBwfBEIVDo", name: "DIA 다이아 – 왠지"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 100;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"우리 서버에 오신것을 환영합니다!",
"아직 서버가 다 완성된것이 아니기 때문에 조언 부탁드립니다!",
"더 다양한 컨텐츠로 여러분을 찾아뵙겠습니다!",
"어드민 채용 문의는 motd로",
"노래들 추천 부탁드립니다",
"원래는 다크알피 열려 했는데..",
"다크알피 가르쳐줄분 구합니다!",
"우리 서버에서 잠시 쉬다가세요!",
"평일에는 밤만 열고 주말에는 거의 하루종일 연답니다ㅎ",
"지역, 인종 비하발언 금지!",
"일베는 즉시 처단하겠습니다..ㅎ",
"서버 테러할 생각은 하지마십시요ㅎㅎ",
"노래좋죠?",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
