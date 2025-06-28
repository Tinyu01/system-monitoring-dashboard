# Ansible README

# Ansible Playbooks for System Monitoring Dashboard

This directory contains Ansible playbooks and inventory files for deploying the System Monitoring Dashboard application. 

## Directory Structure

- **playbooks/**: Contains the main playbook for deploying the application.
- **inventory**: Lists the hosts and groups for deployment.

## Usage

To run the Ansible playbook, navigate to this directory and execute the following command:

```
ansible-playbook -i inventory playbooks/site.yml
```

Make sure to customize the inventory file with your target hosts before running the playbook.

## Requirements

Ensure you have Ansible installed on your machine. You can install it using pip:

```
pip install ansible
```

## Contributing

Feel free to contribute by adding new playbooks or improving existing ones. Please ensure to follow the project's coding standards and guidelines.