import { CartModel } from "./cart/types";

export interface RootState {
    character: CharacterModel;
    cart: CartModel;
    equipment: EquipmentModel;
}

interface CharacterModel {
    name: string;
    luck: string;
    hitPoints: string;
    equipment: Array<EquipmentModel>;
    wealth: number;
}

interface EquipmentModel{
    id: string;
    name: string;
    type: 'Trinket' | 'Weapon' | 'Armour';
    hpModifier: number;
    luckModifier: number;
    value: number;
}