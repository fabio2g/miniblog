import { useEffect, useState } from "react";
const forbiddenWords = [
    "aidético",
    "aidética",
    "aleijado",
    "aleijada",
    "anus",
    "anão",
    "anã",
    "arrombado",
    "apenado",
    "apenada",
    "baba - ovo",
    "babaca",
    "babaovo",
    "bacura",
    "bagos",
    "baianada",
    "baitola",
    "barbeiro",
    "bebum",
    "besta",
    "bicha",
    "bisca",
    "bixa",
    "boazuda",
    "boceta",
    "boco",
    "boiola",
    "bokete",
    "bolagato",
    "bolcat",
    "boquete",
    "bosseta",
    "bosta",
    "bostana",
    "boçal",
    "branquelo",
    "brecha",
    "brexa",
    "brioco",
    "bronha",
    "buca",
    "buceta",
    "bugre",
    "bunda",
    "bunduda",
    "burra",
    "burro",
    "busseta",
    "bêbedo",
    "caceta",
    "cacete",
    "cadela",
    "caga",
    "cagado",
    "cagao",
    "cagão",
    "cagona",
    "caipira",
    "canceroso",
    "caralho",
    "casseta",
    "cassete",
    "ceguinho",
    "checheca",
    "chereca",
    "chibumba",
    "chibumbo",
    "chifruda",
    "chifrudo",
    "chochota",
    "chota",
    "chupado",
    "ciganos",
    "clitoris",
    "clitóris",
    "cocaina",
    "cocaína",
    "coco",
    "cocô",
    "comunista",
    "corna",
    "cornagem",
    "cornisse",
    "corno",
    "cornuda",
    "cornudo",
    "cornão",
    "coxo",
    "cretina",
    "cretino",
    "criolo",
    "crioulo",
    "cruz - credo",
    "cu",
    "cú",
    "culhao",
    "culhão",
    "curalho",
    "cuzao",
    "cuzão",
    "cuzuda",
    "cuzudo",
    "debil",
    "débil",
    "debiloide",
    "debilóide",
    "defunto",
    "demonio",
    "demônio",
    "difunto",
    "doida",
    "doido",
    "encostado",
    "esclerosado",
    "escrota",
    "escroto",
    "esporrada",
    "esporrado",
    "esporro",
    "facista",
    "fascista",
    "fedida",
    "fedido",
    "fedor",
    "fedorenta",
    "feia",
    "feio",
    "feiosa",
    "feioso",
    "feioza",
    "feiozo",
    "felacao",
    "felação",
    "foda",
    "fodao",
    "fodão",
    "fode",
    "fodi",
    "fodida",
    "fodido",
    "fornica",
    "fornição",
    "fudendo",
    "fudeção",
    "fudida",
    "fudido",
    "furada",
    "furado",
    "furnica",
    "furnicar",
    "furona",
    "furão",
    "gai",
    "gaiata",
    "gaiato",
    "gay",
    "gilete",
    "goianada",
    "gonorrea",
    "gonorreia",
    "gonorréia",
    "grelinho",
    "grelo",
    "idiota",
    "imbecil",
    "inculto",
    "iscrota",
    "iscroto",
    "japa",
    "judiar",
    "ladra",
    "ladrao",
    "ladroeira",
    "ladrona",
    "ladrão",
    "lalau",
    "lazarento",
    "leprosa",
    "leproso",
    "lesbica",
    "lésbica",
    "macaca",
    "macaco",
    "machona",
    "macumbeiro",
    "malandro",
    "maluco",
    "maneta",
    "marginal",
    "masturba",
    "meleca",
    "meliante",
    "merda",
    "mija",
    "mijada",
    "mijado",
    "mijo",
    "mocrea",
    "mocreia",
    "mocréia",
    "mondronga",
    "mondrongo",
    "mongol",
    "mongoloide",
    "mongolóide",
    "mulata",
    "mulato",
    "naba",
    "nadega",
    "nádega",
    "nazista",
    "negro",
    "nhaca",
    "nojeira",
    "nojenta",
    "nojento",
    "nojo",
    "olhota",
    "otaria",
    "otario",
    "otária",
    "otário",
    "paca",
    "paspalha",
    "paspalhao",
    "paspalho",
    "pau",
    "peia",
    "peido",
    "pemba",
    "pentelha",
    "pentelho",
    "perereca",
    "perneta",
    "pica",
    "picao",
    "picão",
    "pilantra",
    "pinel",
    "pintudo",
    "pintão",
    "piranha",
    "piroca",
    "piroco",
    "piru",
    "pivete",
    "porra",
    "prega",
    "prequito",
    "priquito",
    "prostibulo",
    "prostituta",
    "prostituto",
    "punheta",
    "punhetao",
    "punhetão",
    "pus",
    "pustula",
    "puta",
    "puto",
    "puxa - saco",
    "puxasaco",
    "penis",
    "pênis",
    "rabao",
    "rabão",
    "rabo",
    "rabuda",
    "rabudao",
    "rabudão",
    "rabudo",
    "rabudona",
    "rachada",
    "rachadao",
    "rachadinha",
    "rachadinho",
    "rachado",
    "ramela",
    "remela",
    "retardada",
    "retardado",
    "ridícula",
    "roceiro",
    "rola",
    "rolinha",
    "sacana",
    "safada",
    "safado",
    "sapatao",
    "sapatão",
    "sifilis",
    "sífilis",
    "siririca",
    "tarada",
    "tarado",
    "testuda",
    "tesuda",
    "tesudo",
    "tezao",
    "tezuda",
    "tezudo",
    "traveco",
    "trocha",
    "trolha",
    "troucha",
    "trouxa",
    "troxa",
    "tuberculoso",
    "tupiniquim",
    "turco",
    "vadia",
    "vagal",
    "vagabunda",
    "vagabundo",
    "vagina",
    "veada",
    "veadao",
    "veado",
    "viada",
    "viadagem",
    "viadao",
    "viadão",
    "viado",
    "viadão",
    "víado",
    "xana",
    "xaninha",
    "xavasca",
    "xerereca",
    "xexeca",
    "xibiu",
    "xibumba",
    "xiíta",
    "xochota",
    "xota",
    "xoxota",
];

export const useDetox = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState(null);

    const banned = (args) => {
        if (!args) return;
        setText(args);
    };

    useEffect(() => {
        if (!text) return;

        const words = text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s]/gi, "")
            .replace(/['"]/g, "")
            .toLowerCase()
            .split(" ");

        const wordsBanned = words.filter((e) => forbiddenWords.includes(e));

        if (wordsBanned.length > 0) {
            setError("Desculpe, não é permitido o uso de palavras impróprias.");
        }
    }, [text]);

    return { banned, error };
};
