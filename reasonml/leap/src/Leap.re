let isLeapYear = (year) => {
  switch (year mod 4) {
  | 0 => switch (year mod 100, year mod 400) {
        | (0, 0) => true
        | (0, _) => false
        | (_, _) => true
        }
  | _ => false
  }
};