using System;
using System.Collections.Generic;
using System.Linq;
using ACDDS.TreasureHunter.Core.Exceptions;
using ACDDS.TreasureHunter.Core.Models;
using Microsoft.Extensions.Logging;

public class TreasureHunterService
{
    private readonly ILogger<TreasureHunterService> _logger;
    
    private readonly Character _character;
    private int _characterWealth;
    private readonly IList<Equipment> _characterEquipment;

    private readonly IList<Equipment> _shopEquipment;

    public TreasureHunterService(ILogger<TreasureHunterService> logger)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _character = new Character();
        _characterWealth = 1000;
        _characterEquipment = new List<Equipment>();
        _shopEquipment = new List<Equipment>()
        {
            new Equipment("Lightsaber", EquipmentType.Weapon, hpModifier: 3, luckModifier: 5, value: 50),
            new Equipment("Pantyhose of Giant Strength", EquipmentType.Armor, hpModifier: 5, luckModifier: 0, value: 20),
            new Equipment("Lucky Charm", EquipmentType.Trinket, hpModifier: 0, luckModifier: 7, value: 40),
            new Equipment("Dark Saber", EquipmentType.Weapon, hpModifier: 3, luckModifier: 0, value: 200),
            new Equipment("Thor's Hammer", EquipmentType.Weapon, hpModifier: 100, luckModifier: 50, value: 2000),
            new Equipment("Ring of Power", EquipmentType.Trinket, hpModifier: 10, luckModifier: 25, value: 30),
            new Equipment("Gold Chest Plate", EquipmentType.Armor, hpModifier: 5, luckModifier: 15, value: 200),
            new Equipment("Seer's Stone", EquipmentType.Trinket, hpModifier: 0, luckModifier: 40, value: 60),
            new Equipment("Parrot", EquipmentType.Weapon, hpModifier: 10, luckModifier: 15, value: 25),
            new Equipment("Diamond Tiara", EquipmentType.Armor, hpModifier: 1, luckModifier: 1, value: 1000)
        };
    }

    public Character GetCharacter()
    {
        return _character;
    }

    public int GetCharacterWealth()
    {
        return _characterWealth;
    }

    public IEnumerable<Equipment> GetCharacterEquipment()
    {
        return _characterEquipment;
    }

    public IEnumerable<Equipment> GetShopEquipment()
    {
        return _shopEquipment;
    }

    public void Purchase(string equipmentId)
    {
        var equipment = _shopEquipment.SingleOrDefault(e => e.Id == equipmentId);
        if (equipment == null)
            throw new EquipmentNotFoundException(equipmentId);
        if (_characterWealth < equipment.Value)
            throw new InsufficientFundsException("Equipment value exceeds the character's wealth.");

        _characterWealth -= equipment.Value;
        _shopEquipment.Remove(equipment);
        _characterEquipment.Add(equipment);
    }
}
