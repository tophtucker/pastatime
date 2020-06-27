const pastas = [
  {
    url: "https://www.dececco.com/us_us/product/acini-di-pepe-no-78/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0078-ACINI-DI-PEPE-2-400x400.png",
    localImg: "VSA0078-ACINI-DI-PEPE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0078-ACINI-DI-PEPE-2-400x400.png",
    name: "Acini di Pepe",
    num: "78",
    times: [["Cooking time", "9 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/angel-hair-nests-no-209/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSV2209-ANGEL-HAIR-NESTS-2-400x400.png",
    localImg: "VSV2209-ANGEL-HAIR-NESTS-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSV2209-ANGEL-HAIR-NESTS-2-400x400.png",
    name: "Angel Hair Nests",
    num: "209",
    times: [["Cooking time", "2 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/angel-hair-no-9/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0009-ANGEL-HAIR-2-400x400.png",
    localImg: "VSA0009-ANGEL-HAIR-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0009-ANGEL-HAIR-2-400x400.png",
    name: "Angel Hair",
    num: "9",
    times: [["Cooking time", "2 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/bucatini-no-15/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0015-BUCATINI-2-400x400.png",
    localImg: "VSA0015-BUCATINI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0015-BUCATINI-2-400x400.png",
    name: "Bucatini",
    num: "15",
    times: [
      ["Al dente", "9 min"],
      ["Cooking time", "11 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/calamarata-no-129/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3129-CALAMARATA-2-400x400.png",
    localImg: "VSA3129-CALAMARATA-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3129-CALAMARATA-2-400x400.png",
    name: "Calamarata",
    num: "129",
    times: [
      ["Al dente", "14 min"],
      ["Cooking time", "16 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/cavatappi-no-87/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0087-CAVATAPPI-2-400x400.png",
    localImg: "VSS0087-CAVATAPPI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0087-CAVATAPPI-2-400x400.png",
    name: "Cavatappi",
    num: "87",
    times: [
      ["Al dente", "6 min"],
      ["Cooking time", "8 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/conchiglioni-rigati-no-126/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3126-CONCHIGLIONI-RIGATI-2-400x400.png",
    localImg: "VSA3126-CONCHIGLIONI-RIGATI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3126-CONCHIGLIONI-RIGATI-2-400x400.png",
    name: "Conchiglioni Rigati",
    num: "126",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "12 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/elbows-no-81/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/04/VSA0081-ELBOWS-2-400x400.png",
    localImg: "VSA0081-ELBOWS-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/04/VSA0081-ELBOWS-2-400x400.png",
    name: "Elbows",
    num: "81",
    times: [["Cooking time", "5 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/farfalle-no-93/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0093-FARFALLE-2-400x400.png",
    localImg: "VSS0093-FARFALLE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0093-FARFALLE-2-400x400.png",
    name: "Farfalle",
    num: "93",
    times: [
      ["Al dente", "11 min"],
      ["Cooking time", "13 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/farfalline-no-95/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0095-FARFALLINE-2-400x400.png",
    localImg: "VSA0095-FARFALLINE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0095-FARFALLINE-2-400x400.png",
    name: "Farfalline",
    num: "95",
    times: [["Cooking time", "6 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/fedelini-no-10/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0010-FEDELINI-2-400x400.png",
    localImg: "VSA0010-FEDELINI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0010-FEDELINI-2-400x400.png",
    name: "Fedelini",
    num: "10",
    times: [
      ["Al dente", "4 min"],
      ["Cooking time", "6 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/fettuccine-no-6/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0006-FETTUCCINE-2-400x400.png",
    localImg: "VSA0006-FETTUCCINE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0006-FETTUCCINE-2-400x400.png",
    name: "Fettuccine",
    num: "6",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "11 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/fusilli-corti-bucati-no-198/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0098-FUSILLI-CORTI-BUCATI-2-400x400.png",
    localImg: "VSS0098-FUSILLI-CORTI-BUCATI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0098-FUSILLI-CORTI-BUCATI-2-400x400.png",
    name: "Fusilli Corti Bucati",
    num: "198",
    times: [
      ["Al dente", "13 min"],
      ["Cooking time", "15 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/fusilli-grandi-n-334/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2020/05/36710_QSX0334-FUSILLI-GRANDI-2-400x400.png",
    localImg: "36710_QSX0334-FUSILLI-GRANDI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2020/05/36710_QSX0334-FUSILLI-GRANDI-2-400x400.png",
    name: "Fusilli Grandi",
    num: "334",
    times: [
      ["Al dente", "13 min"],
      ["Cooking time", "15 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/fusilli-no-34/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0034-FUSILLI-2-400x400.png",
    localImg: "VSS0034-FUSILLI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0034-FUSILLI-2-400x400.png",
    name: "Fusilli",
    num: "34",
    times: [
      ["Al dente", "9 min"],
      ["Cooking time", "11 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/gemelli-no-97/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0097-GEMELLI-2-400x400.png",
    localImg: "VSS0097-GEMELLI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0097-GEMELLI-2-400x400.png",
    name: "Gemelli",
    num: "97",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "12 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/gnocchi-no-46/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0046-GNOCCHI-2-400x400.png",
    localImg: "VSS0046-GNOCCHI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0046-GNOCCHI-2-400x400.png",
    name: "Gnocchi",
    num: "46",
    times: [
      ["Al dente", "7 min"],
      ["Cooking time", "9 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/lasagne-no-1/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS4001-LASAGNE-2-400x400.png",
    localImg: "VSS4001-LASAGNE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS4001-LASAGNE-2-400x400.png",
    name: "Lasagne",
    num: "1",
    times: [["Cooking time", "24 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/linguine-fini-no-8/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0008-LINGUINE-FINI-2-400x400.png",
    localImg: "VSA0008-LINGUINE-FINI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0008-LINGUINE-FINI-2-400x400.png",
    name: "Linguine Fini",
    num: "8",
    times: [
      ["Al dente", "6 min"],
      ["Cooking time", "8 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/linguine-grandi-n-407/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2020/05/36710_QSX0407-LINGUINE-GRANDI-2-400x400.png",
    localImg: "36710_QSX0407-LINGUINE-GRANDI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2020/05/36710_QSX0407-LINGUINE-GRANDI-2-400x400.png",
    name: "Linguine Grandi",
    num: "407",
    times: [
      ["Al dente", "13 min"],
      ["Cooking time", "15 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/linguine-no-7/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0007-LINGUINE-2-400x400.png",
    localImg: "VSA0007-LINGUINE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0007-LINGUINE-2-400x400.png",
    name: "Linguine",
    num: "7",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "12 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/mezzi-paccheri-no-225/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3225-MEZZI-PACCHERI-2-400x400.png",
    localImg: "VSA3225-MEZZI-PACCHERI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3225-MEZZI-PACCHERI-2-400x400.png",
    name: "Mezzi Paccheri",
    num: "225",
    times: [
      ["Al dente", "14 min"],
      ["Cooking time", "16 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/mezzi-rigatoni-no-26/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0026-MEZZI-RIGATONI-2-400x400.png",
    localImg: "VSS0026-MEZZI-RIGATONI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0026-MEZZI-RIGATONI-2-400x400.png",
    name: "Mezzi Rigatoni",
    num: "26",
    times: [
      ["Al dente", "12 min"],
      ["Cooking time", "14 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/orecchiette-no-91/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0091-ORECCHIETTE-2-400x400.png",
    localImg: "VSS0091-ORECCHIETTE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0091-ORECCHIETTE-2-400x400.png",
    name: "Orecchiette",
    num: "91",
    times: [
      ["Al dente", "9 min"],
      ["Cooking time", "11 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/orzo-no-74/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0074-ORZO-2-400x400.png",
    localImg: "VSA0074-ORZO-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0074-ORZO-2-400x400.png",
    name: "Orzo",
    num: "74",
    times: [["Cooking time", "11 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/paccheri-no-125/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3125-PACCHERI-2-400x400.png",
    localImg: "VSA3125-PACCHERI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3125-PACCHERI-2-400x400.png",
    name: "Paccheri",
    num: "125",
    times: [
      ["Al dente", "14 min"],
      ["Cooking time", "16 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/penne-lisce-no-40/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0040-PENNE-LISCE-2-400x400.png",
    localImg: "VSS0040-PENNE-LISCE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0040-PENNE-LISCE-2-400x400.png",
    name: "Penne Lisce",
    num: "40",
    times: [
      ["Al dente", "9 min"],
      ["Cooking time", "11 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/penne-rigate-no-41/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0041-PENNE-RIGATE-2-400x400.png",
    localImg: "VSS0041-PENNE-RIGATE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0041-PENNE-RIGATE-2-400x400.png",
    name: "Penne Rigate",
    num: "41",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "12 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/pennette-no-42/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0042-PENNETTE-2-400x400.png",
    localImg: "VSA0042-PENNETTE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0042-PENNETTE-2-400x400.png",
    name: "Pennette",
    num: "42",
    times: [
      ["Al dente", "7 min"],
      ["Cooking time", "9 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/pennoni-no-38/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0038-PENNONI-2-400x400.png",
    localImg: "VSS0038-PENNONI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0038-PENNONI-2-400x400.png",
    name: "Pennoni",
    num: "38",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "12 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/racchette-no-90/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0090-RACCHETTE-2-400x400.png",
    localImg: "VSS0090-RACCHETTE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0090-RACCHETTE-2-400x400.png",
    name: "Racchette",
    num: "90",
    times: [
      ["Al dente", "9 min"],
      ["Cooking time", "11 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/rigatoni-napoletani-no-124/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3124-RIGATONI-NAPOLETANI-2-400x400.png",
    localImg: "VSA3124-RIGATONI-NAPOLETANI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA3124-RIGATONI-NAPOLETANI-2-400x400.png",
    name: "Rigatoni Napoletani",
    num: "124",
    times: [
      ["Al dente", "12 min"],
      ["Cooking time", "14 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/rigatoni-no-24/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0024-RIGATONI-2-400x400.png",
    localImg: "VSS0024-RIGATONI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0024-RIGATONI-2-400x400.png",
    name: "Rigatoni",
    num: "24",
    times: [
      ["Al dente", "12 min"],
      ["Cooking time", "14 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/rotelle-no-54/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0054-ROTELLE-2-400x400.png",
    localImg: "VSS0054-ROTELLE-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0054-ROTELLE-2-400x400.png",
    name: "Rotelle",
    num: "54",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "12 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/shells-no-50/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0050-SHELLS-2-400x400.png",
    localImg: "VSS0050-SHELLS-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0050-SHELLS-2-400x400.png",
    name: "Shells",
    num: "50",
    times: [
      ["Al dente", "11 min"],
      ["Cooking time", "13 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/small-shells-no-52/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0052-SMALL-SHELLS-2-400x400.png",
    localImg: "VSA0052-SMALL-SHELLS-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0052-SMALL-SHELLS-2-400x400.png",
    name: "Small Shells",
    num: "52",
    times: [["Cooking time", "8 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/spaghetti-no-12/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0012-SPAGHETTI-2-400x400.png",
    localImg: "VSA0012-SPAGHETTI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0012-SPAGHETTI-2-400x400.png",
    name: "Spaghetti",
    num: "12",
    times: [
      ["Al dente", "10 min"],
      ["Cooking time", "12 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/squared-spaghetti-no-413/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0413-SQUARED-SPAGHETTI-2-400x400.png",
    localImg: "VSA0413-SQUARED-SPAGHETTI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0413-SQUARED-SPAGHETTI-2-400x400.png",
    name: "Squared Spaghetti",
    num: "413",
    times: [
      ["Al dente", "11 min"],
      ["Cooking time", "13 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/thin-spaghetti-no-11/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0011-THIN-SPAGHETTI-2-400x400.png",
    localImg: "VSA0011-THIN-SPAGHETTI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0011-THIN-SPAGHETTI-2-400x400.png",
    name: "Thin Spaghetti",
    num: "11",
    times: [
      ["Al dente", "7 min"],
      ["Cooking time", "9 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/tortiglioni-no-23/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0023-TORTIGLIONI-2-400x400.png",
    localImg: "VSS0023-TORTIGLIONI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0023-TORTIGLIONI-2-400x400.png",
    name: "Tortiglioni",
    num: "23",
    times: [
      ["Al dente", "9 min"],
      ["Cooking time", "11 min"],
    ],
  },
  {
    url: "https://www.dececco.com/us_us/product/tubetti-no-62/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0062-TUBETTI-2-400x400.png",
    localImg: "VSA0062-TUBETTI-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSA0062-TUBETTI-2-400x400.png",
    name: "Tubetti",
    num: "62",
    times: [["Cooking time", "10 min"]],
  },
  {
    url: "https://www.dececco.com/us_us/product/zita-cut-no-118/",
    remoteImg:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0118-ZITA-CUT-2-400x400.png",
    localImg: "VSS0118-ZITA-CUT-2-400x400.png",
    img:
      "https://www.dececco.com/wp-content/uploads/2018/05/VSS0118-ZITA-CUT-2-400x400.png",
    name: "Zita Cut",
    num: "118",
    times: [
      ["Al dente", "9 min"],
      ["Cooking time", "11 min"],
    ],
  },
];

d3.select("section")
  .selectAll("div")
  .data(pastas)
  .join("div")
  .attr("class", "item")
  .each(renderPasta);

function renderPasta({ localImg, times, name, num }, i) {
  const sel = d3.select(this);
  const time = +times[0][1].split(" ")[0];
  sel.append("img").attr("src", `images/${localImg}`);
  sel.append("h2").text(name);
  sel.append("div").attr("class", "num").text(`№ ${num}`);
  sel
    .append("div")
    .attr("class", "time")
    .text(time)
    .append("small")
    .text("min");
  const path = sel
    .append("svg")
    .attr("viewBox", "-10 -10 20 20")
    .append("path");

  sel.on("click", function () {
    console.log("hi");
    const arc = d3.arc().innerRadius(0).outerRadius(10).startAngle(0);
    const start = Date.now();
    const end = d3.timeMinute.offset(start, time);
    const scale = d3
      .scaleTime()
      .domain([start, end])
      .range([0, 2 * Math.PI]);
    path.style("fill", `hsl(${Math.random() * 360}, 50%, 50%)`);
    const timer = d3.timer(function (t) {
      path.attr("d", arc({ endAngle: scale(Date.now()) }));
      if (Date.now() > end) {
        alert(`Your ${name.toLowerCase()} is done!`);
        timer.stop();
      }
    });
  });
}
