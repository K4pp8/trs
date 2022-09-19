export type Command = 'Place' | 'Move' | 'Left' | 'Right' | 'Report';
export type Facing = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export interface Place {
    x: number;
    y: number;
} 