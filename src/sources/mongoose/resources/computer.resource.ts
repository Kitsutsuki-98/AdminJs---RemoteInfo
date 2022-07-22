import { CreateResourceResult } from "src/admin/create-resource-result.type";
import { menu } from "../../../admin";
import { ComputerModel } from "../models";
import { THUMB } from "src/admin/components.bundler";

export const CreateComputerResource = (): CreateResourceResult<typeof ComputerModel> => ({
    resource: ComputerModel,
    options: {
        parent: menu.mongoose,
        properties: {
            _id: {
                isTitle: false,
            },
            Hostname: {
                type: 'string',
            },
        },
    },
});

