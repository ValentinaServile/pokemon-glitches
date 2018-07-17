global $trainerEngaging = false
global $trainerWalkingUpToPlayer = false

global $currentlyEngagingTrainer = {
  id : null, //Lives in memory shared with battle engine
  text: null
}

//script 0
function CheckFightingMapTrainers(route) {
  if TrainerEngaging() {
    $trainerEngaging = true
    $trainerWalkingUpToPlayer = true
    MakeEnemyWalkToPlayer()
    $currentlyEngagingTrainer.id = TrainerEngaging()
    route.currentScriptIndex = route.currentRouteIndex + 1
  }
}

//script 1
function DisplayEnemyTrainerTextAndStartBattle(route) {
  if ($trainerWalkingUpToPlayer) {
    return
  }
  DisplayTextID($currentlyEngagingTrainer.textID)
  StartTrainerBattle()
}

function StartTrainerBattle($currentlyEngagingTrainer.id) {
  InitBattleEnemyParameters()
  route.currentScriptIndex = route.currentRouteIndex + 1
}

function InitBattleEnemyParameters() {
  if ($currentlyEngagingTrainer.id > 200)
    currentBattleType = TRAINER
  else
    currentBattleType = POKEMON
  //Init opponent's data based on type
  //Battle engine takes over from here
}

//script 2
function EndTrainerBattle(route) {
  $trainerEngaging = false
}
