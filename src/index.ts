// TODO

import SSM from "aws-sdk/clients/ssm";

var ssm = new SSM({ region: "eu-west-2" });

export async function getParameter(
  name: string
): Promise<SSM.GetParameterResult> {
  var params = {
    Name: name,
    WithDecryption: true,
  };
  return new Promise((resolve, reject) =>
    ssm.getParameter(params, (err, data) => (err ? reject(err) : resolve(data)))
  );
}
async function run() {
  console.log(await getParameter("SECRET_KEY"));
  console.log(await getParameter("EMPTY_KEY"));
}
run().catch(console.error);
