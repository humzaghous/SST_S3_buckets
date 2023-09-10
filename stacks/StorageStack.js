import { Bucket, Table } from "sst/constructs";
export function StorageStack({ stack, app }) {
// Create the s3 bucket
const bucket = new Bucket(stack, "Uploads");

const table = new Table(stack, "Notes", {
fields: {
userId: "string",
noteId: "string",
},
primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
});
return {
    bucket,
};
}