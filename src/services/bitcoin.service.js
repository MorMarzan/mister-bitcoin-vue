import axios from 'axios'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate() {
  // try {
  //   const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
  //   console.log('Data getRate:', res.data)
  //   return res.data
  // } catch (err) {
  //   console.error('Error fetching data of rate:', err)
  // }
  return 0.00002324
}

async function getMarketPriceHistory() {
  // try {
  //   const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5weeks&format=json&cors=true')
  //   // console.log('Data getRate:', res.data)
  //   return res.data
  // } catch (err) {
  //   console.error('Error fetching data of market history:', err)
  // }
  return marketPriceHistory
}

async function getAvgBlockSize() {
  // try {
  //   const res = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5weeks&format=json&cors=true')
  //   // console.log('Data getRate:', res.data)
  //   return res.data
  // } catch (err) {
  //   console.error('Error fetching data of market history:', err)
  // }
  return avgBlock
}

const marketPriceHistory =
{
  "status": "ok",
  "name": "Market Price (USD)",
  "unit": "USD",
  "period": "day",
  "description": "Average USD market price across major bitcoin exchanges.",
  "values": [
    {
      "x": 1704240000,
      "y": 44958.98
    },
    {
      "x": 1704326400,
      "y": 42854.95
    },
    {
      "x": 1704412800,
      "y": 44190.1
    },
    {
      "x": 1704499200,
      "y": 44181.1
    },
    {
      "x": 1704585600,
      "y": 43975.63
    },
    {
      "x": 1704672000,
      "y": 43928.07
    },
    {
      "x": 1704758400,
      "y": 46972.42
    },
    {
      "x": 1704844800,
      "y": 46143.31
    },
    {
      "x": 1704931200,
      "y": 46649.42
    },
    {
      "x": 1705017600,
      "y": 46355.63
    },
    {
      "x": 1705104000,
      "y": 42843.98
    },
    {
      "x": 1705190400,
      "y": 42837.18
    },
    {
      "x": 1705276800,
      "y": 41716.15
    },
    {
      "x": 1705363200,
      "y": 42497.78
    },
    {
      "x": 1705449600,
      "y": 43132.4
    },
    {
      "x": 1705536000,
      "y": 42742.78
    },
    {
      "x": 1705622400,
      "y": 41262.64
    },
    {
      "x": 1705708800,
      "y": 41620.04
    },
    {
      "x": 1705795200,
      "y": 41659.4
    },
    {
      "x": 1705881600,
      "y": 41557.6
    },
    {
      "x": 1705968000,
      "y": 39505.09
    },
    {
      "x": 1706054400,
      "y": 39856.34
    },
    {
      "x": 1706140800,
      "y": 40068.49
    },
    {
      "x": 1706227200,
      "y": 39925.5
    },
    {
      "x": 1706313600,
      "y": 41813.44
    },
    {
      "x": 1706400000,
      "y": 42124.31
    },
    {
      "x": 1706486400,
      "y": 42030.81
    },
    {
      "x": 1706572800,
      "y": 43274.65
    },
    {
      "x": 1706659200,
      "y": 42950.77
    },
    {
      "x": 1706745600,
      "y": 42557.22
    },
    {
      "x": 1706832000,
      "y": 43061.16
    },
    {
      "x": 1706918400,
      "y": 43183.04
    },
    {
      "x": 1707004800,
      "y": 42991.51
    },
    {
      "x": 1707091200,
      "y": 42576.16
    },
    {
      "x": 1707177600,
      "y": 42653.29
    },
    {
      "x": 1707264000,
      "y": 43080.9
    }
  ]
}

const avgBlock =
{
  "status": "ok",
  "name": "Average Block Size",
  "unit": "MB",
  "period": "day",
  "description": "The average block size in MB.",
  "values": [
    {
      "x": 1704240000,
      "y": 1.7714657531645563
    },
    {
      "x": 1704326400,
      "y": 1.782401741176469
    },
    {
      "x": 1704412800,
      "y": 1.7745511666666665
    },
    {
      "x": 1704499200,
      "y": 1.8479592000000018
    },
    {
      "x": 1704585600,
      "y": 1.776827237288136
    },
    {
      "x": 1704672000,
      "y": 1.6502389268292694
    },
    {
      "x": 1704758400,
      "y": 1.7541163026315794
    },
    {
      "x": 1704844800,
      "y": 1.7924143308270677
    },
    {
      "x": 1704931200,
      "y": 1.5768140982658962
    },
    {
      "x": 1705017600,
      "y": 1.649432642857142
    },
    {
      "x": 1705104000,
      "y": 1.7330992641509446
    },
    {
      "x": 1705190400,
      "y": 1.7433228750000005
    },
    {
      "x": 1705276800,
      "y": 1.7309833771929821
    },
    {
      "x": 1705363200,
      "y": 1.7053197200000003
    },
    {
      "x": 1705449600,
      "y": 1.7185003966942147
    },
    {
      "x": 1705536000,
      "y": 1.7471369366197178
    },
    {
      "x": 1705622400,
      "y": 1.6686307272727272
    },
    {
      "x": 1705708800,
      "y": 1.6923209300699298
    },
    {
      "x": 1705795200,
      "y": 1.6910784571428572
    },
    {
      "x": 1705881600,
      "y": 1.7018461874999988
    },
    {
      "x": 1705968000,
      "y": 1.5379622142857143
    },
    {
      "x": 1706054400,
      "y": 1.7583796600000017
    },
    {
      "x": 1706140800,
      "y": 1.6717768950276262
    },
    {
      "x": 1706227200,
      "y": 1.6317857565789478
    },
    {
      "x": 1706313600,
      "y": 1.740003567251463
    },
    {
      "x": 1706400000,
      "y": 1.7778224250000005
    },
    {
      "x": 1706486400,
      "y": 1.7200927307692309
    },
    {
      "x": 1706572800,
      "y": 1.6928412499999996
    },
    {
      "x": 1706659200,
      "y": 1.6789903740458019
    },
    {
      "x": 1706745600,
      "y": 1.7102868235294124
    },
    {
      "x": 1706832000,
      "y": 1.702339218085107
    },
    {
      "x": 1706918400,
      "y": 1.690524271523179
    },
    {
      "x": 1707004800,
      "y": 1.5829797483870964
    },
    {
      "x": 1707091200,
      "y": 1.413415935897436
    },
    {
      "x": 1707177600,
      "y": 1.3842028529411758
    }
  ]
}