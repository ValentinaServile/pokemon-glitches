class BattleEngine() {

  enemyUnmodifiedStats = {  //Shared memory!
      attack : 0
      defense : 0
      hp : 0
      speed : 0
      special : 0 //lives at address that determines engaging opponent
    }

  enemyCurrentStats = {
      attack : 0
      defense : 0
      hp : 0
      speed : 0
      special : 0
    }


  init() {
    enemyUnmodifiedStats = LoadEnemyStats()
    enemyCurrentStats = enemyUnmodifiedStats
    //...
  }

  //...

}
