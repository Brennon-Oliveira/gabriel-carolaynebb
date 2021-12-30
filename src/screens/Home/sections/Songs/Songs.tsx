import Container from "./../../../../components/Container/Container.component";
import { useState } from "react";
import "./Songs.css";
import Song from "../../../../components/Song/Song";
import Title from "./../../../../components/Title/Title";
const IntencaoMariliaMendonca = require("../../../../Assets/musics/IntencaoMariliaMendonca.mp3");
const TristesseNossa = require("../../../../Assets/musics/TristesseNossa.ogg");
const RubelAnaVitoriaPartilhar = require("../../../../Assets/musics/RubelAnaVitoriaPartilhar.mp3");
const AJMitchellMyLoverMyFriend = require("../../../../Assets/musics/AJMitchellMyLoverMyFriend.mp3");
const GustavoMiotoMelhorNegocio = require("../../../../Assets/musics/GustavoMiotoMelhorNegocio.mp3");
const GustavoMiotoMariliaMendoncaRestricaoSentimental = require("../../../../Assets/musics/GustavoMiotoMariliaMendoncaRestricaoSentimental.mp3");
const ZeNetoECristianoTeAmo = require("../../../../Assets/musics/ZeNetoECristianoTeAmo.mp3");
const GustavoMiotoChocolate = require("../../../../Assets/musics/GustavoMiotoChocolate.mp3");
const ZeNetoECristianoMeuMedo = require("../../../../Assets/musics/ZeNetoECristianoMeuMedo.mp3");
const HowLongWillILoveYouTemaDoFilmeQuestaoDeTempo = require("../../../../Assets/musics/HowLongWillILoveYouTemaDoFilmeQuestaoDeTempo.mp3");
const AndyGrammerDontGiveUpOnMe = require("../../../../Assets/musics/AndyGrammerDontGiveUpOnMe.mp3");
const ZaynTaylorSwiftIDontWannaLiveForever = require("../../../../Assets/musics/ZaynTaylorSwiftIDontWannaLiveForever.mp3");

export default function Songs() {
    const [musics, setMusics] = useState([
        {
            title: "Intenção - Marília Mendonça",
            path: IntencaoMariliaMendonca,
        },
        {
            title: "Tristesse - Nossa",
            path: TristesseNossa,
        },
        {
            title: "Partilhar - Rubel e Ana Vitória",
            path: RubelAnaVitoriaPartilhar,
        },
        {
            title: "My Lover, My Friend - AJ Mitchell",
            path: AJMitchellMyLoverMyFriend,
        },
        {
            title: "Melhor Negócio - Gustavo Mioto",
            path: GustavoMiotoMelhorNegocio,
        },
        {
            title: "Restrição Sentimental - Gustavo Mioto e Marília Mendonça",
            path: GustavoMiotoMariliaMendoncaRestricaoSentimental,
        },
        {
            title: "Te amo - Zé Neto e Cristiano",
            path: ZeNetoECristianoTeAmo,
        },
        {
            title: "Chocolate - Gustavo Mioto",
            path: GustavoMiotoChocolate,
        },
        {
            title: "Meu Medo - Zé Neto e Cristiano",
            path: ZeNetoECristianoMeuMedo,
        },
        {
            title: "How Long Will I Love You - Tema Do Filme Questao De Tempo",
            path: HowLongWillILoveYouTemaDoFilmeQuestaoDeTempo,
        },
        {
            title: "Don't Give Up On Me - Andy Grammer",
            path: AndyGrammerDontGiveUpOnMe,
        },
        {
            title: "I Dont Wanna Live Forever - Zayn e TaylorSwift",
            path: ZaynTaylorSwiftIDontWannaLiveForever,
        },
    ]);

    return (
        <section id="Songs">
            <Container>
                <Title>Músicas</Title>
                <div className="songs">
                    {musics.map((music) => {
                        return (
                            <div className="song">
                                <h3>{music.title}</h3>
                                <Song song={music.path} />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
