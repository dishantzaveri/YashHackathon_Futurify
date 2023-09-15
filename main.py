from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import streamlit as st
b = 'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png'

# Add a background image
st.markdown(
    f"""
    <style>
    .reportview-container {{
        background: url({b});
        background-size: cover;
    }}
    </style>
    """,
    unsafe_allow_html=True
)

# Title
st.title("Futurify: Product Analysis Tool")

# Subtitle
st.subheader("Assess Your Product's Potential Success")

# Text Input for Product Name
product_name = st.text_input("Enter Product Name")

# Text Input for Company Name
company_name = st.text_input("Enter Company Name")

# Text Area for Product Description
product_description = st.text_area("Product Description")

link = st.text_input("Link to product if already in production")

# Checkbox for Competitor Analysis
competitor_analysis = st.checkbox("Perform Competitor Analysis")

# Checkbox for Market Research
market_research = st.checkbox("Conduct Market Research")

# Button to Analyze
if st.button("Analyze Product"):
    # Display Analysis Results
    st.subheader("Analysis Results")
    st.write(f"Product Name: {product_name}")
    st.write(f"Company Name: {company_name}")
    llm = OpenAI(temperature=0.9, openai_api_key = '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')
    prompt = PromptTemplate(
        input_variables=["product", "description"],
        template="Generate 2 complete human like negative reviews on the product {product} with the following features: {description}",
    )
    all_reviews=[]
    for i in range(2):
        chain = LLMChain(llm=llm, prompt=prompt)

        reviews = chain.run({'product':product_name, 'description':product_description})
        all_reviews.append(reviews)
    llm = OpenAI(temperature=0.9, openai_api_key = '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')
    prompt = PromptTemplate(
        input_variables=["product", "description"],
        template="Generate 2 complete human like positive reviews on the product {product} with the following features: {description}",
    )
    for i in range(2):
        chain = LLMChain(llm=llm, prompt=prompt)

        reviews = chain.run({'product':product_name, 'description':product_description})
        all_reviews.append(reviews)
    prompt2=PromptTemplate(
        input_variables=["product", "reviews"],
        template="Suggest potential changes to be made to the {product} according to the following reviews: {reviews}",
    )
    chain = LLMChain(llm=llm, prompt=prompt2)

    potential_changes = chain.run({'product':product_name, 'reviews':" ".join(all_reviews)})
    #To be shown as potential changes one could have in his product
    st.write(f"Potential Changes: {potential_changes}")

    prompt3=PromptTemplate(
        input_variables=["product", 'link', "description"],
        template="Generate a very short and sweet instagram post for the {product} (include product link: {link}) with the following description: {description}",
    )
    chain = LLMChain(llm=llm, prompt=prompt3)

    instagram_post = chain.run({'product':product_name, 'link':link, 'description':product_description})
    #To be shown as marketing content Generator
    st.write(f"Instagram Post: {instagram_post}")

    prompt4=PromptTemplate(
        input_variables=["reviews"],
        template="Give me a generalized analysis of the following {reviews}",
    )
    chain = LLMChain(llm=llm, prompt=prompt4)

    Summary = chain.run(" ".join(all_reviews))
    #To be shown as analysis of product reviews
    st.write(f"analysis of product reviews: {Summary}")



    if competitor_analysis:
        prompt5=PromptTemplate(
            input_variables=["product", "description"],
            template="Here is my product and its description: {product} - {description}. Give me the possible competitors and their description",
        )
        chain = LLMChain(llm=llm, prompt=prompt5)

        competition = chain.run({'product':product_name, 'description':product_description})
        #To be To be passed to the next prompt
        st.write(f"Competitors: {competition}")

        prompt6=PromptTemplate(
            input_variables=["product", "description", "competition"],
            template="Here is my product and its description: {product}{description} and following are the competition: {competition}. Give me a competitor analysis",
        )
        chain = LLMChain(llm=llm, prompt=prompt6)

        competitor_analysis = chain.run({'product':product_name, 'description':product_description, 'competition':competition})
        #To be shown as competitor analysis
        st.write(f"Competitor analysis: {competitor_analysis}")
    else:
        st.write("Competitor Analysis: No")
    
    
    # Add your analysis logic here based on the inputs

# About Section
st.sidebar.title("About")
st.sidebar.info("Revolutionary approach to risk evaluation and customer service with generative AI and deep learning.")

# Contact Information
st.sidebar.title("Contact Information")
st.sidebar.text("Email: contact@abcproductanalysis.com")
st.sidebar.text("Website: www.abcproductanalysis.com")
