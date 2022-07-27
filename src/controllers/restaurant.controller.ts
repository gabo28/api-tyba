import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from 'src/domain/dto';
import { AuthUseCases } from '../domain/use-cases/auth/auth.use-cases'
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/domain/use-cases/auth//jwt-auth.guard';

@Controller('api/private/restaurant')
export class RestaurantController {
    constructor(private authUseCases: AuthUseCases) {}
    
    @UseGuards(JwtAuthGuard)
    @Post()
    async getRestaurant(@Request() req) {
     return {
        restaurants:[
            {
                name: 'Carymet Gourmet',
                address: 'Cl. 104 #64-86',
                city: 'Medellin'
            },
            {
                name: 'D André Restaurante',
                address: 'Carrera 37 #10-15',
                city: 'Envigado'
            }
        ]
     }
    }
}
