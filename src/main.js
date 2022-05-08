function getCheapestHotel(input) {
  const hotels = [
    {
      name: "Lakewood",
      classification: "3 star",
      prices: {
        regular: {
          weekdays: 110,
          weekends: 90,
        },
        rewards: {
          weekdays: 80,
          weekends: 80,
        },
      },
    },
    {
      name: "Bridgewood",
      classification: "4 star",
      prices: {
        regular: {
          weekdays: 160,
          weekends: 60,
        },
        rewards: {
          weekdays: 110,
          weekends: 50,
        },
      },
    },
    {
      name: "Ridgewood",
      classification: "5 star",
      prices: {
        regular: {
          weekdays: 220,
          weekends: 150,
        },
        rewards: {
          weekdays: 100,
          weekends: 40,
        },
      },
    },
  ];

  let inputArray = input.split(/[\s,]+/);

  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i].replace(/[^\w\s]/gi, "");
  }

  let clientType = "";
  let weekdaysCount = 0;
  let weekendsCount = 0;

  let lakewoodPrices = 0;
  let bridgewoodPrices = 0;
  let ridgewoodPrices = 0;

  let hotelName = "";

  function countDays(input) {
    let weekdays = ["mon", "tues", "wed", "thur", "fri"];
    let weekends = ["sat", "sun"];

    for (let j = 1; j < input.length; j++) {
      for (let h = 0; h < weekdays.length; h++) {
        if (input[j].match(weekdays[h])) {
          input[j] = weekdays[h];
          weekdaysCount++;
        }
      }

      for (let h = 0; h < weekends.length; h++) {
        if (input[j].match(weekends[h])) {
          input[j] = weekends[h];
          weekendsCount++;
        }
      }
    }
  }

  countDays(inputArray);

  function cheapestHotel() {
    if (lakewoodPrices < bridgewoodPrices && lakewoodPrices < ridgewoodPrices) {
      hotelName = hotels[0].name;
    } else if (
      bridgewoodPrices < lakewoodPrices &&
      bridgewoodPrices < ridgewoodPrices
    ) {
      hotelName = hotels[1].name;
    } else if (
      ridgewoodPrices < lakewoodPrices &&
      ridgewoodPrices < bridgewoodPrices
    ) {
      hotelName = hotels[2].name;
    } else if (lakewoodPrices === bridgewoodPrices) {
      hotelName = hotels[1].name;
    } else if (lakewoodPrices === ridgewoodPrices) {
      hotelName = hotels[2].name;
    }

    return hotelName;
  }

  if (inputArray[0].toLowerCase() === "regular") {
    clientType = "regular";

    if (weekdaysCount > 0 && weekendsCount > 0) {
      lakewoodPrices =
        hotels[0].prices.regular.weekdays * weekdaysCount +
        hotels[0].prices.regular.weekends * weekendsCount;

      bridgewoodPrices =
        hotels[1].prices.regular.weekdays * weekdaysCount +
        hotels[1].prices.regular.weekends * weekendsCount;

      ridgewoodPrices =
        hotels[2].prices.regular.weekdays * weekdaysCount +
        hotels[2].prices.regular.weekends * weekendsCount;

      cheapestHotel();
    } else if (weekdaysCount === 0 && weekendsCount > 0) {
      lakewoodPrices = hotels[0].prices.regular.weekends * weekendsCount;

      bridgewoodPrices = hotels[1].prices.regular.weekends * weekendsCount;

      ridgewoodPrices = hotels[2].prices.regular.weekends * weekendsCount;

      cheapestHotel();
    } else if (weekdaysCount > 0 && weekendsCount === 0) {
      lakewoodPrices = hotels[0].prices.regular.weekdays * weekdaysCount;

      bridgewoodPrices = hotels[1].prices.regular.weekdays * weekdaysCount;

      ridgewoodPrices = hotels[2].prices.regular.weekdays * weekdaysCount;

      cheapestHotel();
    }
  } else if (inputArray[0].toLowerCase() === "rewards") {
    clientType = "rewards";

    if (weekdaysCount > 0 && weekendsCount > 0) {
      lakewoodPrices =
        hotels[0].prices.rewards.weekdays * weekdaysCount +
        hotels[0].prices.rewards.weekends * weekendsCount;

      bridgewoodPrices =
        hotels[1].prices.rewards.weekdays * weekdaysCount +
        hotels[1].prices.rewards.weekends * weekendsCount;

      ridgewoodPrices =
        hotels[2].prices.rewards.weekdays * weekdaysCount +
        hotels[2].prices.rewards.weekends * weekendsCount;

      cheapestHotel();
    } else if (weekdaysCount === 0 && weekendsCount > 0) {
      lakewoodPrices = hotels[0].prices.rewards.weekends * weekendsCount;

      bridgewoodPrices = hotels[1].prices.rewards.weekends * weekendsCount;

      ridgewoodPrices = hotels[2].prices.rewards.weekends * weekendsCount;

      cheapestHotel();
    } else if (weekdaysCount > 0 && weekendsCount === 0) {
      lakewoodPrices = hotels[0].prices.regular.weekdays * weekdaysCount;

      bridgewoodPrices = hotels[1].prices.regular.weekdays * weekdaysCount;

      ridgewoodPrices = hotels[2].prices.regular.weekdays * weekdaysCount;

      cheapestHotel();
    }
  }

  return hotelName;
}

exports.getCheapestHotel = getCheapestHotel;
