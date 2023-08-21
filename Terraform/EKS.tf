module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.15.1"

  cluster_name    = "ConnectX-Cluster"
  cluster_version = "1.27"
  subnets         = [aws_subnet.main.id, aws_subnet.main2.id]
  vpc_id          = aws_vpc.main.id

  node_groups = {
    eks_nodes = {
      desired_capacity = 1
      max_capacity     = 1
      min_capacity     = 1
      instance_type    = "t2.micro"
      key_name         = "aws"
      k8s_labels = {
        Name = "eks-worker-group"
      }
    }
  }
}


# Now let's examine each block of code:

# - The `module "eks"` block is used to declare and configure the EKS AWS module. This module is called from the Terraform AWS modules at the declared source.

# - Input variables include:
#    - `cluster_name`: The name of the EKS cluster.
#    - `cluster_version`: Describes the Kubernetes version to use for the EKS.
#    - `subnets`: The subnet IDs where we want our resources to reside.
#    - `vpc_id`: The VPC ID where those subnets reside.

# - The `node_groups` block is used to define a managed worker group, with specified capacity and instance type.
#   - `desired_capacity`: The desired number of worker nodes.
#   - `max_capacity`: The maximum number of worker nodes the EKS cluster can scale out to.
#   - `min_capacity`: The minimum number of worker nodes the EKS cluster can scale in to.
#   - `instance_type`: The type of instances to use for the worker nodes.
#   - `key_name`: The name of an existing EC2 KeyPair that can be used to access the worker nodes via SSH.
#   - `k8s_labels`: Metadata to assign to all nodes in the node group. 

# Please replace `"my-key"` with your actual EC2 KeyPair. Also, you will need to ensure that the versions and instance types are correct and available for your specific use case. Note that this is a basic setup. AWS EKS provides many more functionalities that you might want to use as per your requirements.

# This should give you a running EKS cluster with managed node groups, which can be subsequently used with the GitHub actions tool for your CI/CD pipeline needs.
