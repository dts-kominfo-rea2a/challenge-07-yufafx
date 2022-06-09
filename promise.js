const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const dataIXX = await promiseTheaterIXX();
    const dataVGC = await promiseTheaterVGC();
    const allData = [...dataIXX, ...dataVGC];
    const result = allData.filter((e) => {
      if (e.hasil === emosi) return e;
    });
    return result.length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
