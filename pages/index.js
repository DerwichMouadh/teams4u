import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import bg from "../images/3star.jpg";
import bg1 from "../images/35star.jpg";

export default function Home() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  const data1 = [
    {
      id: 1,
      name: "Middlesbrough",
      logo: "midd",
      img: "gb-eng-1",
      league: "England, Championship",
      attack: 75,
      midfield: 70,
      defence: 70,
      overall: 70,
    },
    {
      id: 2,
      name: "Atlanta United",
      logo: "atlanta",
      img: "us-1",
      league: "US, MLS",
      attack: 74,
      midfield: 70,
      defence: 69,
      overall: 70,
    },
    {
      id: 3,
      name: "Guangzhou FC",
      logo: "gua",
      img: "cn-1",
      league: "China, Super League",
      attack: 74,
      midfield: 70,
      defence: 69,
      overall: 70,
    },
    {
      id: 4,
      name: "CD Tenerife",
      logo: "tene",
      img: "es-1",
      league: "Spain, Segunda División",
      attack: 73,
      midfield: 70,
      defence: 69,
      overall: 70,
    },
    {
      id: 5,
      name: "Rosario Central",
      logo: "rosario",
      img: "ar-1",
      league: "Argentina, Primera División",
      attack: 73,
      midfield: 70,
      defence: 68,
      overall: 70,
    },
    {
      id: 6,
      name: "Al Ittihad",
      logo: "ittihad",
      img: "sa-1",
      league: "Saudi Arabia, Pro League",
      attack: 72,
      midfield: 70,
      defence: 68,
      overall: 70,
    },
    {
      id: 7,
      name: "Newell’s Old Boys",
      logo: "old",
      img: "ar-1",
      league: "Argentina, Primera División",
      attack: 72,
      midfield: 69,
      defence: 70,
      overall: 70,
    },
    {
      id: 8,
      name: "Real Sporting de Gijón",
      logo: "gigon",
      img: "es-1",
      league: "Spain, Segunda División",
      attack: 72,
      midfield: 69,
      defence: 70,
      overall: 70,
    },
    {
      id: 9,
      name: "DC United",
      logo: "dc",
      img: "us-1",
      league: "US, MLS",
      attack: 72,
      midfield: 68,
      defence: 68,
      overall: 70,
    },
    {
      id: 10,
      name: "Moreirense",
      logo: "mor",
      img: "pt-1",
      league: "	Portugal, Primeira Liga",
      attack: 71,
      midfield: 70,
      defence: 70,
      overall: 70,
    },
    {
      id: 11,
      name: "Hamburger SV",
      logo: "hamb",
      img: "de-1",
      league: "Germany, 2. Bundesliga",
      attack: 71,
      midfield: 70,
      defence: 70,
      overall: 70,
    },
    {
      id: 12,
      name: "Fortuna Düsseldorf",
      logo: "duss",
      img: "de-1",
      league: "Germany, 2. Bundesliga",
      attack: 71,
      midfield: 70,
      defence: 70,
      overall: 70,
    },
    {
      id: 13,
      name: "Salernitana",
      logo: "saler",
      img: "it-1",
      league: "	Italy, Serie A",
      attack: 71,
      midfield: 69,
      defence: 71,
      overall: 70,
    },
    {
      id: 14,
      name: "Vitesse",
      logo: "vit",
      img: "nl-1",
      league: "Netherlands, Eredivisie",
      attack: 70,
      midfield: 70,
      defence: 72,
      overall: 70,
    },
    {
      id: 15,
      name: "Málaga CF",
      logo: "malaga",
      img: "es-1",
      league: "Spain, Segunda División",
      attack: 70,
      midfield: 70,
      defence: 71,
      overall: 70,
    },
  ];

  const data2 = [
    {
      id: 1,
      name: "Al Hilal",
      logo: "hilal",
      flag: "sa-1",
      league: "SAUDI ARABIA",
      attack: 78,
      midfield: 74,
      defence: 72,
      overall: 73,
    },
    {
      id: 2,
      name: "Cruz Azul",
      logo: "Azul",
      flag: "mx-1",
      league: "Mexico",
      attack: 77,
      midfield: 73,
      defence: 73,
      overall: 74,
    },
    {
      id: 3,
      name: "Rangers",
      logo: "rangers",
      flag: "gb-sct-1",
      league: "Scotland",
      attack: 74,
      midfield: 74,
      defence: 75,
      overall: 74,
    },
    {
      id: 4,
      name: "Galatasaray",
      logo: "galatasaray",
      flag: "tr-1",
      league: "Turkey",
      attack: 72,
      midfield: 72,
      defence: 73,
      overall: 74,
    },
    {
      id: 5,
      name: "FC Union Berlin",
      logo: "berlin",
      flag: "de-1",
      league: "Germany",
      attack: 77,
      midfield: 72,
      defence: 73,
      overall: 74,
    },
    {
      id: 6,
      name: "Norwich City",
      logo: "norwich",
      flag: "gb-eng-1",
      league: "England",
      attack: 76,
      midfield: 74,
      defence: 74,
      overall: 74,
    },
    {
      id: 7,
      name: "Cádiz CF",
      logo: "cadiz",
      flag: "es-1",
      league: "Spain",
      attack: 76,
      midfield: 74,
      defence: 73,
      overall: 74,
    },
    {
      id: 8,
      name: "RC Strasbourg",
      logo: "Strasbourg",
      flag: "fr-1",
      league: "France",
      attack: 76,
      midfield: 74,
      defence: 72,
      overall: 74,
    },
    {
      id: 9,
      name: "FC Girondins de Bordeaux",
      logo: "bordeaux",
      flag: "fr-1",
      league: "France",
      attack: 75,
      midfield: 75,
      defence: 71,
      overall: 74,
    },
    {
      id: 10,
      name: "Club América",
      logo: "america",
      flag: "mx-1",
      league: "Mexico",
      attack: 75,
      midfield: 74,
      defence: 74,
      overall: 74,
    },
    {
      id: 11,
      name: "Udinese",
      logo: "udinese",
      flag: "it-1",
      league: "Italy",
      attack: 75,
      midfield: 74,
      defence: 73,
      overall: 74,
    },
    {
      id: 12,
      name: "Rayo Vallecano",
      logo: "rayo",
      flag: "es-1",
      league: "Spain",
      attack: 75,
      midfield: 74,
      defence: 72,
      overall: 74,
    },
    {
      id: 13,
      name: "Lokomotiv Moskva",
      logo: "Lokomotiv",
      flag: "ru-1",
      league: "Russia",
      attack: 75,
      midfield: 73,
      defence: 73,
      overall: 74,
    },
    {
      id: 14,
      name: "Fulham",
      logo: "fulham",
      flag: "gb-eng-1",
      league: "England",
      attack: 75,
      midfield: 73,
      defence: 73,
      overall: 74,
    },
    {
      id: 15,
      name: "Genoa",
      logo: "genoa",
      flag: "it-1",
      league: "Italy",
      attack: 75,
      midfield: 72,
      defence: 74,
      overall: 74,
    },
    {
      id: 16,
      name: "KRC Genk",
      logo: "genk",
      flag: "it-1",
      league: "BELGIUM",
      attack: 77,
      midfield: 72,
      defence: 73,
      overall: 73,
    },
    {
      id: 17,
      name: "AS Saint-Étienne",
      logo: "saint",
      flag: "fr-1",
      league: "France",
      attack: 76,
      midfield: 74,
      defence: 72,
      overall: 73,
    },
  ];

  return (
    <div>
      <Head>
        <title>Teams4U</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="pb-4">
        <div className="fixed top-0 right-0 left-0 bg-white z-50">
          <div className="text-3xl font-bold font-fancy text-center border-b-2 py-2">
            Teams4U
          </div>
          <div className="flex items-center justify-evenly shadow-xl py-3">
            <div
              onClick={() => {
                setOpen1(true);
                setOpen2(false);
              }}
              className={`${
                open1 ? "opacity-100" : "opacity-50"
              } bg-lime-500 hover:opacity-100 rounded-xl h-10 w-36 flex items-center justify-center cursor-pointer font-semibold`}
            >
              3.5 Star Teams
            </div>
            <div
              onClick={() => {
                setOpen1(false);
                setOpen2(true);
              }}
              className={`${
                open2 ? "opacity-100" : "opacity-50"
              } bg-lime-500 hover:opacity-100 rounded-xl h-10 w-36 flex items-center justify-center cursor-pointer font-semibold`}
            >
              3 Star Teams
            </div>
          </div>
        </div>

        <div className="mt-36">
          <h2 className="text-4xl text-center font-bold text-lime-600">
            FIFA22
          </h2>
          {open1 && (
            <div>
              <h2 className="text-xl font-semibold py-2 text-center">
                Best 3.5 Star Teams to Play With
              </h2>
              <Image
                alt=""
                src={bg1}
                layout="responsive"
                priority
                className="object-cover"
              />
              <div>
                {data2.map(
                  ({
                    id,
                    name,
                    logo,
                    flag,
                    league,
                    attack,
                    midfield,
                    defence,
                    overall,
                  }) => (
                    <div
                      key={id}
                      className="rounded-xl my-4 mx-6 pb-4 shadow-xl border"
                    >
                      <div className="bg-lime-300 rounded-t-xl py-2 mb-4">
                        <h2 className="text-center font-medium">{league.toUpperCase()}</h2>
                        <div className="w-12 m-auto">
                          <Image
                            alt=""
                            src={`/${flag}.svg`}
                            priority
                            className=""
                            layout="responsive"
                            width="50px"
                            height="50px"
                          />
                        </div>
                      </div>

                      <h2 className="text-center font-medium text-2xl">
                        {name.toUpperCase()}
                      </h2>
                      <div className="w-28 m-auto py-2">
                        <Image
                          alt=""
                          src={`/${logo}.jpg`}
                          priority
                          className=""
                          layout="responsive"
                          width="50px"
                          height="50px"
                        />
                      </div>
                      <div className="flex items-center justify-center space-x-5">
                        <div className="text-center">
                          <h2 className="text-sm -mb-2">ATT</h2>
                          <h3 className="text-2xl font-bold">{attack}</h3>
                        </div>
                        <div className="text-center">
                          <h2 className="text-sm -mb-2">MID</h2>
                          <h3 className="text-2xl font-bold">{midfield}</h3>
                        </div>
                        <div className="text-center">
                          <h2 className="text-sm -mb-2">DEF</h2>
                          <h3 className="text-2xl font-bold">{defence}</h3>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          {open2 && (
            <div>
              <h2 className="text-xl font-semibold py-2 text-center">
                Best 3 Star Teams to Play With
              </h2>
              <Image
                alt=""
                src={bg}
                layout="responsive"
                priority
                className="object-cover"
              />
              <div>
                {data1.map(
                  ({
                    id,
                    name,
                    logo,
                    img,
                    league,
                    attack,
                    midfield,
                    defence,
                    overall,
                  }) => (
                    <div
                      key={id}
                      className="rounded-xl my-4 mx-6 pb-4 shadow-xl border"
                    >
                      <div className="bg-lime-300 rounded-t-xl py-2 mb-4">
                        <h2 className="text-center font-medium">{league.toUpperCase()}</h2>
                        <div className="w-12 m-auto">
                          <Image
                            alt=""
                            src={`/${img}.svg`}
                            priority
                            className=""
                            layout="responsive"
                            width="50px"
                            height="50px"
                          />
                        </div>
                      </div>
                      <h2 className="text-center font-medium text-2xl">
                        {name.toUpperCase()}
                      </h2>
                      <div className="w-28 m-auto py-2">
                        <Image
                          alt=""
                          src={`/${logo}.jpg`}
                          priority
                          className=""
                          layout="responsive"
                          width="50px"
                          height="50px"
                        />
                      </div>
                      <div className="flex items-center justify-center space-x-5">
                        <div className="text-center">
                          <h2 className="text-sm -mb-2">ATT</h2>
                          <h3 className="text-2xl font-bold">{attack}</h3>
                        </div>
                        <div className="text-center">
                          <h2 className="text-sm -mb-2">MID</h2>
                          <h3 className="text-2xl font-bold">{midfield}</h3>
                        </div>
                        <div className="text-center">
                          <h2 className="text-sm -mb-2">DEF</h2>
                          <h3 className="text-2xl font-bold">{defence}</h3>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-lime-500 text-center py-2">
        <p className=" font-bold">Teams4U by Mouadh DERWICH</p>
        <p className="">© All rights reserved 2022</p>
      </div>
    </div>
  );
}
