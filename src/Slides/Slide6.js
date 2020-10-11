import React from "react";

const Slide6 = () => {
  return (
    <div>
      <div className="pict-in-midd-container">
        <div className="order-class-1">
          <h3 style={{ color: "#990000" }}>Server</h3>
          <hr style={{ border: 0, borderTop: "2px solid #990000" }} />
          <ul>
            <li>Sadrži enkriptovane podatke o korisnicima</li>
            <li>
              Služi za razmenu enkriptovanih ključeva izmedju admina i korisnika
              putem NFC-a
            </li>
            <li>
              Administrator je u mogućnosti da manipuliše pravima za svaku
              bravu, kao i da ima uvid u aktivnost u sistemu
            </li>
          </ul>
        </div>
        <div className="order-class-2">
          <img
            style={{ marginLeft: "8%" }}
            src="/images/hexagon-triangle.png"
            alt=""
          />
        </div>
        <div className="order-class-3">
          <h3 style={{ color: "#8c8c8c" }}>Softver</h3>
          <hr style={{ border: 0, borderTop: "2px solid #8c8c8c" }} />
          <ul>
            <li>
              Koristeći sposobnosti pametnih telefona omogućava korisniku jasan
              pregled, razmenu i manipulisanje digitalnim ključevima
            </li>
            <li>
              Resetovanje i kreiranje novog master ključa za bravu za koju ima
              administratorske privilegije
            </li>
            <li>
              Koristi sposobnost pametnog telefona da čita biometriku korisnika
            </li>
            <li>Zaštita od zloupotrebe</li>
          </ul>
        </div>
      </div>
      <div className="text-in-midd-container">
        <div className="order-class-4 middle-position">
          <h3 style={{ color: "#e69500" }}>Pametna Brava</h3>
          <hr style={{ border: 0, borderTop: "2px solid #e69500" }} />
          <ul>
            <li>Sistem je zamišljen i kreiran sa naglaskom na versatilnosti</li>
            <li>Korisniku je omogućeno pravo izbora specifične brave</li>
            <li>
              Mogućnost adaptacije postojećeg kontigenta električnih brava
            </li>
            <li>Kompatibilnost Sistema sa postojećim bravama</li>
            <li>
              Arduino-based hardverski aplikant na sebi sadrži softver koji uz
              pomoć kreiranog algoritma i apsolutnog vremena potvrđuje validnost
              I omogućava korisniku da otključa vrata
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
