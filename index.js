const elementResposta = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const buttonQuestion = document.querySelector("#buttonQuestion")

const answers = [
  "365",
  "A Different Night",
  "ADD",
  "Around You (다녀가요)",
  "Be Honest",
  "Butterfly",
  "Chaotic",
  "Colors (색깔)",
  "Curiosity",
  "Dance On My Own",
  "Daydream",
  "Day & Night",
  "Ding Ding Dong (땡땡땡).",
  "D-1",
  "Eclipse",
  "Egoist",
  "Everyday I Love You",
  "Everyday I Need You",
  "Fall Again.",
  "favOriTe",
  "Flip That",
  "frozen",
  "Girl Front",
  "Girl's Talk",
  "Heart Attack",
  "Hi High",
  "Hide & Seek (숨바꼭질)",
  "HULA HOOP",
  "I'll Be There",
  "Into the New Heart",
  "Kiss Later (키스는 다음에)",
  "Let Me In (소년, 소녀)",
  "LOONATIC",
  "LOONATIC (Eng. Ver.)",
  "Love&Evil",
  "Love & Live (지금, 좋아해)",
  "Love Cherry Motion",
  "Love Letter",
  "love4eva (feat. Grimes)",
  "My Melody",
  "My Sunday",
  "Need U",
  "new",
  "Number 1",
  "ODD",
  "ODD Front",
  "Oh (Yes I Am)",
  "One & Only",
  "one way",
  "OOPS!",
  "Pale Blue Dot",
  "Perfect Love",
  "Playback",
  "POSE",
  "PTT (Paint The Town)",
  "PTT (Paint The Town) (Japanese ver.)",
  "Puzzle",
  "Rain 51Db (비의 목소리 51db)",
  "rendezvous 18.6y",
  "Rosy",
  "Satellite (위성)",
  "See Saw",
  "Singing in the Rain",
  "Sonatine (알 수 없는 비밀)",
  "Star (“Voice” Eng. Ver.)",
  "Starlight",
  "StarSeed ~Kakusei~",
  "Stylish",
  "Sweet Crazy Love",
  "The Carol",
  "The Carol 2.0",
  "The Journey",
  "Twilight",
  "U R",
  "Uncover",
  "Universe",
  "Valentine Girl (3월을 기다려)",
  "ViViD",
  "Voice (목소리)",
  "Where you at",
  "Why Not?",
  "WOW",
  "X X",
  "You and Me Together",
  "열기 (Yeolgi, Heat)",
  "Tell Me Now",
  "Yum-Yum",
  "Yummy-Yummy",
  "+ +",
  "&",
  "#",



]

function askQuestion() {

  if (inputQuestion.value == "") {
    alert("Ask your question")
    return
  }

  buttonQuestion.setAttribute("disabled", true)

  const question = "<div>" + inputQuestion.value + "</div>"


  const totalResp = answers.length
  const numAleat = Math.floor(Math.random() * totalResp)

  console.log(answers[numAleat])
  elementResposta.innerHTML = question + answers[numAleat]

  elementResposta.style.opacity = 1

  setTimeout(function () {
    elementResposta.style.opacity = 0;
    buttonQuestion.removeAttribute('disabled')
  }, 2000);
}
