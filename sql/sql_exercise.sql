/**********************************************************
*	SQL Query & Function Example1
**********************************************************/
/**
-- Employees Table Columns
-- EMPLOYEE_ID
-- FIRST_NAME
-- LAST_NAME
-- EMAIL
-- PHONE_NUMBER
-- HIRE_DATE
-- JOB_ID
-- SALARY
-- COMMISSION_PCT
-- MANAGER_ID
-- DEPARTMENT_ID
**/

--�μ���ȣ�� 10���� �μ��� ��� �� �����ȣ, �̸�, ������ ����϶�
select employee_id �����ȣ, last_name || first_name ����̸�, salary �޿� from employees where department_id=10;




--�����ȣ�� 7369�� ��� �� �̸�, �Ի���, �μ� ��ȣ�� ����϶�. (�����ȣ ����x)
select last_name||first_name �̸�, hire_date �Ի���, department_id �μ� ��ȣ from employees where employee_id=7369



--�̸��� Ellen�� ����� ��� ������ ����϶�.
select * from employees where lower(last_name)='ellen';
no rows selected




--�Ի����� 08/04/21�� ����� �̸�, �μ���ȣ, ������ ����϶�.
select last_name||first_name ����̸�, department_id �μ���ȣ, salary ���� from employees where hire_date='08/04/21'





--������ SA_MAN �ƴ� ����� ��� ������ ����϶�.
 select * from employees where NOT job_id='SA_MAN';



��--�Ի����� 08/04/21 ���Ŀ� �Ի��� ����� ������ ����϶�.
'����Ŭ���� ��¥ �� ���'


--�μ���ȣ�� 20,30���� ������ ��� ����� �̸�, �����ȣ, �μ���ȣ�� ����϶�.
 select last_name||first_name, employee_id �����ȣ, department_id �μ���ȣ from employees where department_id not in (20,30);



--�̸��� S�� �����ϴ� ����� �����ȣ, �̸�, �Ի���, �μ���ȣ�� ����϶�.
select last_name, employee_id, department_id from employees where last_name like 'S%';


--�̸��� s�� �����ϰ� ������ ���ڰ� t�� ����� ������ ����϶�.
select employee_id from employees where last_name like 'S%' and last_name like '%t';



/**
employees ���̺��� �̸�, �޿�, ��, �Ѿ��� ���Ͽ� �Ѿ� ���� ������ ����϶� �� �󿩱��� NULL�� ����� ����

*/
select last_name �̸�, salary �޿�, commission_pct ��, (salary + commission_pct) ����  from employees where commission_pct is not null order by ���� desc;



/**
10�� �μ��� ��� ����鿡�� �޿��� 13%�� ���ʽ��� �����ϱ�� �Ͽ���. �̸�, �޿�, ���ʽ��ݾ�, �μ���ȣ�� ����϶�.
**/



/**
30�� �μ��� ������ ����Ͽ� �̸�, �μ���ȣ, �޿�, ������ ����϶�. �� ������ �޿��� 150%�� ���ʽ��� �����Ѵ�.
   -- ���� = sal*12+(sal*1.5)
**/




/**
�μ���ȣ�� 20�� �μ��� �ð��� �ӱ��� ����Ͽ� ����϶�. �� 1���� �ٹ��ϼ��� 12���̰� 1�� �ٹ��ð��� 5�ð��̴�.
��¾���� �̸�, �޿�, �ð��� �ӱ�(�Ҽ����� 1��° �ڸ����� �ݿø�)�� ����϶�.
   -- �ñ� = sal/�ϼ�/�ð�  -> sal/ 12/5 
   -- round(m, n) m�� �Ҽ��� n�ڸ����� �ݿø� 
**/




/**
�޿��� 1500���� 3000������ ����� �޿��� 5%�� ȸ��� �����ϱ�� �Ͽ���. �̸� �̸�, �޿�, ȸ��(-2�ڸ����� �ݿø�)�� ����϶�.
	-- ȸ��  = sal * 0.05	
	-- -2�ڸ����� �ݿø� : ���� 2��° �ڸ����� �ݿø�.. 100������  
**/





/**
�Ի��Ϻ��� ���ݱ����� ��¥���� ����϶�. �μ���ȣ, �̸�, �Ի���, ������, �ٹ��ϼ�(�Ҽ�����������), �ٹ����,
 �ٹ�����(30�� ����)�� ����϶�.
	-- ���� ��¥ : sysdate 
	-- �ٹ� �ϼ� : ���糯¥ - �Ի��� = sysdate - hire_date  -> ��¥ - ��¥ : �ϼ� ����
	-- �ٹ� ��� : to_char(sysdate,'YYYY')-to_char(hiredate,'YYYY')
	-- �ٹ� ���� : �ٹ��ϼ� / 1��(30��)
**/







/**
�Ի��Ϸκ��� ���ñ����� �ϼ��� ���Ͽ� �̸�, �Ի���, �ٹ��ϼ��� ����϶�.
--round(sysdate-hiredate,0) �ٹ��ϼ�
**/



/**
�Ի����� 2012�� 7�� 5���� ���·� �̸�, �Ի����� ����϶�.
	-- ��¥ ���� �տ� fm �� ���� '0'�� ǥ������ �ʴ´ٴ� ��.. 
	-- 'fmYYYY"��" MM"��" DD"��' 
**/




/**
�̸�(first_name)�� ���ڼ��� 6���̻��� ����� �̸��� �տ��� 3�ڸ� ���Ͽ� �ҹ��ڷ� �̸����� ����϶�.
	-- substr(str, position, length) : str ���ڸ� positin ���� length���� ��ŭ ǥ��
	-- lower(str)  �ҹ��� ��ȯ
	-- length(str)  str�� ����
**/






/**
10�� �μ� ������ ��դ� �ְ�, ����, �ο����� ���Ͽ� ����϶�
**/





/**
�� �μ��� �޿��� ���, �ְ�, ����, �ο����� ���Ͽ� ����϶�.
**/






/**
�� �μ��� ���� ������ �ϴ� ����� �ο����� ���Ͽ� �μ���ȣ, ������, �ο����� ����϶�.
**/





/**
���� ������ �ϴ� ����� ���� 4�� �̻��� ������ �ο����� ����϶�.
**/





/**
�� �μ��� ��տ���, ��ü����, �ְ����, ��������,�� ���Ͽ� ��տ����� ���������� ����϶�.
**/




