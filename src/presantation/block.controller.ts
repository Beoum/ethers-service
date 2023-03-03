import { Controller, Get, Param } from '@nestjs/common';
import EthersService from '../application/ethers/ethers.service';
import { ApiImplicitParam } from '@nestjs/swagger/dist/decorators/api-implicit-param.decorator';
import { ApiTags } from '@nestjs/swagger';
import { BlockDto } from '../application/ethers/ethers.dto';

@ApiTags('Block')
@Controller('blocks')
export default class BlockController {
  constructor(private readonly ethersService: EthersService) {}

  @Get('current')
  async findCurrent(): Promise<BlockDto> {
    return this.ethersService.findOneBlock();
  }

  @Get('/:hash')
  @ApiImplicitParam({ name: 'hash', required: true, type: String })
  async findOneByHash(@Param('hash') hash: string): Promise<BlockDto> {
    return this.ethersService.findOneBlock(hash);
  }
}
