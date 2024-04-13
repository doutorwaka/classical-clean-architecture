import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type CreateProductInputDto = {
    name: string;
    price: number;
};

export type CreateProductOutputDto = {
    id: string;
};

export class CreateProductUsecase
    implements Usecase<CreateProductInputDto, CreateProductOutputDto>
{
    private constructor(private readonly productGateway: ProductGateway) {}

    public static create(productGateway: ProductGateway) {
        return new CreateProductUsecase(productGateway);
    }

    public async execute({
        name,
        price,
    }: CreateProductInputDto): Promise<CreateProductOutputDto> {
        const aProduct = Product.create(name, price);

        await this.productGateway.save(aProduct);

        const output = this.presentOutput(aProduct);

        return output;
    }

    private presentOutput(product: Product): CreateProductOutputDto {
        const output: CreateProductOutputDto = {
            id: product.id
        }

        return output;
    }
}
