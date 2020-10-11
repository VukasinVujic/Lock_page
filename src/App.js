import React, { useState } from "react";
import Slide3 from "./Slides/Slide3";
import Slide6 from "./Slides/Slide6";
import Slide10 from "./Slides/Slide10";
import Slide11 from "./Slides/Slide11";
import Slide12 from "./Slides/Slide12";
import Contact from "./Slides/Contact";

const App = () => {
  const languages = [
    {
      slide_3_title: "Prednosti GGL1 brave",
      slide_3_par_1:
        "Simbioza softverskog rešenja i kombinacije third-party hardvera koji formira pametnu bravu",
      slide_3_par_2: "Bez upotrebe wireless-a i Bluetooth-a",
      slide_3_par_3:
        "Koriscenje NFC modula na telefonu umesto fizičkog ključa, uz back-up opciju korišćenja fizičkog ključa",
      slide_3_par_4:
        "Mogućnost kreiranja master ključa kao i manipulacija ostalim vremenskim ključevima",
      slide_6_title: "GGL1 Sistem",
      slide_6_title_1: "Server",
      slide_6_par_1_1: "Sadrži enkriptovane podatke o korisnicima",
      slide_6_par_1_2:
        "Služi za razmenu enkriptovanih ključeva izmedju admina i korisnika putem NFC-a",
      slide_6_par_1_3:
        "Administrator je u mogućnosti da manipuliše pravima za svaku bravu, kao i da ima uvid u aktivnost u sistemu",
      slide_6_par_1_4:
        "Poseduje mogućnost kreiranja bezbednosnih protokola za svakog korisnika ponaosob",
      slide_6_title_2: "Softver",
      slide_6_par_2_1:
        "Koristeći sposobnosti pametnih telefona omogućava korisniku jasan pregled, razmenu i manipulisanje digitalnim ključevima",
      slide_6_par_2_2:
        "Resetovanje i kreiranje novog master ključa za bravu za koju ima administratorske privilegije",
      slide_6_par_2_3:
        "Koristi sposobnost pametnog telefona da čita biometriku korisnika",
      slide_6_par_2_4: "Zaštita od zloupotrebe",
      slide_6_title_3: "Pametna Brava",
      slide_6_par_3_1:
        "Sistem je zamišljen i kreiran sa naglaskom na versatilnosti",
      slide_6_par_3_2: "Korisniku je omogućeno pravo izbora specifične brave",
      slide_6_par_3_3:
        "Mogućnost adaptacije postojećeg kontigenta električnih brava",
      slide_6_par_3_4:
        "Arduino-based hardverski aplikant na sebi sadrži softver koji uz pomoć kreiranog algoritma i apsolutnog vremena potvrđuje validnost I omogućava korisniku da otključa vrata",
      slide_11_title_1: "Hardver i ploča",
      slide_12_title_1: "Upoznajte naš",
      slide_12_title_2: "Tim",
    },
    {
      slide_3_title: "Advantages of GGL1 lock",
      slide_3_par_1:
        "A symbiosis of a software solution and a combination of third-party hardware that forms a smart lock",
      slide_3_par_2: "Without the use of wirelessand Bluetooth",
      slide_3_par_3:
        "Using the NFC module on the phone instead of the physical key, with the back-up option of using the physical key",
      slide_3_par_4:
        "Ability to create a master key as well as manipulate other time keys",
      slide_6_title: "GGL1 System",
      slide_6_title_1: "Server",
      slide_6_par_1_1: "Contains encrypted user data",
      slide_6_par_1_2:
        "It is used to exchange encrypted keys between admins and users via NFC",
      slide_6_par_1_3:
        "Administrator is able to manipulate rights for each lock, as well as to have an insight into the activity in the system",
      slide_6_par_1_4:
        "It has the ability to create security protocols for each user individually",
      slide_6_title_2: "Software",
      slide_6_par_2_1:
        "Using capabilities of smartphones, it allows the user to have a clear review of system, to exchange and manipulate digital keys",
      slide_6_par_2_2:
        "Resetting and creating a new master key for a lock for which it has administrator privileges",
      slide_6_par_2_3: "Uses smartphone’s ability to read user biometrics",
      slide_6_par_2_4: "Protection against abuse",
      slide_6_title_3: "Smart Lock",
      slide_6_par_3_1:
        "System was conceived and created with an emphasis on versatility",
      slide_6_par_3_2: "The user is allowed to choose a specific lock",
      slide_6_par_3_3:
        "Possibility of adapting the existing contingent of electric locks",
      slide_6_par_3_4:
        "The Arduino-based hardware applicant contains software that validates and allows the user to unlock the door with the help of the created algorithm and absolute time",
      slide_11_title_1: "Hardware and board",
      slide_12_title_1: "Meet Our",
      slide_12_title_2: "Team",
      slide_12_par_1_1: "",
    },

    {
      slide_3_title: "Преимущества GGL1 замка",
      slide_3_par_1:
        "Симбиоз програмного решения и комбинации third-party оборудования, который формирует умный замок",
      slide_3_par_2:
        "Без использования безпроводного интернета и технологии Bluetooth",
      slide_3_par_3:
        "Использование модуля NFC на телефоне вместо физического ключа, с резервной опцией использования физического ключа",
      slide_3_par_4:
        "Возможность создания главного ключа и манипуляции остальными временными ключами",
      slide_6_title: "Система GGL1",
      slide_6_title_1: "Сервер",
      slide_6_par_1_1: "Содержит зашифрованные данные пользователей",
      slide_6_par_1_2:
        "Используется для обмена зашифрованными ключами между администратором и пользователем",
      slide_6_par_1_3:
        "Администратор может манипулировать правами каждого замка, а также следить за активностью в системе",
      slide_6_par_1_4:
        "Обладает возможностью создавать протоколы безопасности индивидуально для каждого пользователя",
      slide_6_title_2: "Програмное обеспечение",
      slide_6_par_2_1:
        "Дает возможность пользователю ясный просмотр, передачу и манипулирование цифровых ключей за счет использования возможностей смартфонов",
      slide_6_par_2_2:
        "Сброс и создание нового главного ключа для замка, для которого есть права администратора",
      slide_6_par_2_3:
        "Использует возможности смартфона читать биометрические данные пользователя",
      slide_6_par_2_4: "Защита от злоупотребления",
      slide_6_title_3: "Умный замок",
      slide_6_par_3_1: "Система задумана и создана с упором на универсальность",
      slide_6_par_3_2: "Пользователь может выбрать конкретный замок",
      slide_6_par_3_3:
        "Возможность адаптации существующего контингента электронных замков",
      slide_6_par_3_4:
        "Оборудование на базе Arduino содержит програмное обеспечение, которое, с помощью созданного алгоритма и абсолютного времени, проверяет ключ и позволяет открыть дверь",
      slide_11_title_1: "Оборудование и плата",
      slide_12_title_1: "Наша",
      slide_12_title_2: "Команда",
      slide_12_par_1_1: "",
    },
  ];

  const [languageContext, setLanguageContext] = useState(languages[0]);
  const [numPicture, setNumPicture] = useState(0);

  const changeToSerbian = () => {
    setLanguageContext(languages[0]);
    setNumPicture(0);
  };

  const changeToEnglish = () => {
    setLanguageContext(languages[1]);
    setNumPicture(1);
  };
  const changeToRussian = () => {
    setLanguageContext(languages[2]);
    setNumPicture(2);
  };

  return (
    <div>
      <div className="language-icon-container">
        <button className="button-icon-lang" onClick={changeToSerbian}>
          <img className="language-icon" src="/images/serbia.png" alt="" />
        </button>

        <button className="button-icon-lang" onClick={changeToEnglish}>
          <img
            className="language-icon"
            src="/images/united-kingdom.png"
            alt=""
          />
        </button>
        <button className="button-icon-lang" onClick={changeToRussian}>
          <img className="language-icon" src="/images/russia.png" alt="" />
        </button>
      </div>
      <Slide3 languageContext={languageContext} />
      <Slide6 languageContext={languageContext} />
      <Slide10 numPicture={numPicture} />
      <Slide11 languageContext={languageContext} />
      <Slide12 languageContext={languageContext} />
      <Contact languageContext={languageContext} />
    </div>
  );
};

export default App;
