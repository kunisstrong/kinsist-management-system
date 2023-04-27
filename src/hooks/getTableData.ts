export const getTableData = async (API: Function) => {
  let tableDataHooks = {};
  let tableTotalHooks = 0;

  const res = await API();
  if (res.code === 200) {
    tableDataHooks = res.data.content;
    tableTotalHooks = res.data.totalSize;
  }
  return {
    tableDataHooks,
    tableTotalHooks
  };
};
