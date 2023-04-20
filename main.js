/*  Process list:
	-DEFINE CONSTANTS
	-allies
	-INITIALIZE MEMORY
		global>room>spawn>flag>source>creeps
	-DEFINE INITIAL VARIABLES
	-CARTOGRAPHY
	-MAIN & LOOP FUNCTIONS
	-CLEARCREEPMEMORY
	-SCREEP ROLES
	-SPAWNSCREEPS
	-TOWERS
	-MINING
	
	
	
	
	
	*/
	
	

for (const roomName in Game.rooms) {
	const room = Game.rooms[roomName];
	const spawns = room.find(FIND_MY_SPAWNS);
	const flags = room.find(FIND_FLAGS);
	const sources = room.find(FIND_SOURCES);
	const screeps = room.find(FIND_MY_CREEPS);
	
		for (const spawn of spawns) {
			
		}
};















module.exports.loop = function () {
	











	
};
