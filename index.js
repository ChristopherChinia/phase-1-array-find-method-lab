function superbowlWin(records) {
  let result = records.find((record) =>
    record.result === "W" ? record.year : undefined
  )
  return result!=undefined? result.year : undefined;
}


