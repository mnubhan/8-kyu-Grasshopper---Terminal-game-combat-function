function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}
