// Code your solution here:
function driversWithRevenueOver (arr, revenue) {
  return arr.filter((driver) => driver.revenue > revenue )
};

 function driverNamesWithRevenueOver (arr, revenue) {
  return driversWithRevenueOver (arr, revenue).map (function (driver) {return driver.name})
}
