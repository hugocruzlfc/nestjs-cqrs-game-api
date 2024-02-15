import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { HeroesService } from './heroes.service';
import { Hero } from './models/hero.model';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    await this.heroesService.killDragon(id, dto);
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }
}
