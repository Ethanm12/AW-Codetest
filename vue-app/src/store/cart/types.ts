
export interface RootState {
    name: string;
}

export interface EquipmentModel {
    id: string;
    name: string;
    type: 'Trinket' | 'Weapon' | 'Armour';
    hpModifier: number;
    luckModifier: number;
    value: number;
}

export interface CartModel {
    cartItems: Array<EquipmentModel>;
    cartValue: number;
    cartCount: number;
    cartErrorMessage: string;
}

export interface PostEquipmentModel {
    equipmentID: number;
}