export interface EquipmentModel {
    id: number;
    name: string;
    type: 'Trinket' | 'Weapon' | 'Armour' ;
    hpModifier: number;
    luckModifier: number;
    value: number;
}

export interface EquipmentListModel {
    equipment: Array<EquipmentModel>;
}