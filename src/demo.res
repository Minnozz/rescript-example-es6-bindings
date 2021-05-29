@module external formatDistanceToNow: Js.Date.t => string = "date-fns/formatDistanceToNow"
Js.Console.log(formatDistanceToNow(Js.Date.make()))
