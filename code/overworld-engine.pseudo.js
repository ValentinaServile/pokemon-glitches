class OverworldEngine {

  currentRouteIndex = 8
  routes = [
    route1,
    route2,
    //...all other routes
    route8
    //...all other locations in the game
  ]

  function run() {
    while true {
      frame()
    }
  }

  function frame() {
    //a ton of other stuff happening
    currentRoute = routes[currentRouteIndex]
    script = currentRoute.scripts[currentRoute.currentScriptIndex]
    script.execute
  }

}
